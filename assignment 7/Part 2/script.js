const API = {
    KEY: "37352b81e88bf377901ba073d79609a1",
    CURRENT_WEATHER_URL: "https://api.openweathermap.org/data/2.5/weather?",
    FORECAST_URL: "https://api.openweathermap.org/data/2.5/forecast?"
};

(() => {
    let map;
    let cityMarker;

    document.addEventListener("DOMContentLoaded", initializeApp);

    function initializeApp() {
        setInitialTheme();
        bindEventListeners();
        checkGeoSupport();
        initializeMap();
    }

    function setInitialTheme() {
        const isDarkTheme = localStorage.getItem('theme') === 'dark';
        document.body.classList.toggle('dark-mode', isDarkTheme);
    }

    function initializeMap() {
        DG.then(() => {
            map = DG.map('map', {
                center: [54.98, 82.89],
                zoom: 13
            });
        });
    }

    function bindEventListeners() {
        const events = {
            'tempToggle': toggleTemperature,
            'searchBtn': handleCitySearch,
            'refreshBtn': refreshWeatherData,
            'darkModeToggle': toggleDarkMode
        };

        for (let id in events) {
            const element = document.getElementById(id);
            if (element) {
                element.addEventListener('click', events[id]);
            }
        }
    }

    function hideLoadingIndicator() {
        document.getElementById('loadingDiv').style.display = 'none';
    }

    function checkGeoSupport() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(fetchCityByCoords, handleGeoError, {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            });
        } else {
            alert("Geolocation is not supported by this browser");
        }
    }

    async function fetchCityByCoords(position) {
        try {
            const data = await fetchWeatherData(`${API.CURRENT_WEATHER_URL}lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${API.KEY}`);
            updateWeatherWidget(data.name);
        } catch (error) {
            console.error("Error fetching city by coords:", error);
        } finally {
            hideLoadingIndicator();
        }
    }

    async function fetchWeatherData(url) {
        const response = await fetch(url);
        if (!response.ok) {
            console.error(`HTTP error! Status: ${response.status}`);
            return null;
        }
        return response.json();
    }

    async function updateWeatherWidget(city) {
        try {
            const weatherData = await fetchWeatherData(`${API.CURRENT_WEATHER_URL}q=${city}&appid=${API.KEY}`);
            displayWeather(weatherData);

            const forecastData = await fetchWeatherData(`${API.FORECAST_URL}q=${city}&appid=${API.KEY}`);
            displayForecast(forecastData);
        } catch (error) {
            console.error("Error updating weather widget:", error);
        } finally {
            hideLoadingIndicator();
        }
    }

    function handleGeoError(error) {
        console.warn(`ERROR(${error.code}): ${error.message}`);
    }

    function displayWeather(data) {
        if (cityMarker) {
            cityMarker.remove();
        }
    
        cityMarker = DG.marker([data.coord.lat, data.coord.lon]).addTo(map);
        map.setView([data.coord.lat, data.coord.lon], 13);
    
        const weatherHeader = document.querySelector('.weather-widget .header h1');
        weatherHeader.textContent = data.weather[0].description;
    
        const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        const iconImg = `<img src="${iconUrl}" alt="${data.weather[0].description}" />`;
    
        weatherHeader.innerHTML = iconImg + weatherHeader.innerHTML;
    
        const [placeSpan, timeSpan] = document.querySelector('.weather-widget .header .place-time').querySelectorAll('span');
        placeSpan.textContent = data.name;
        const currentTime = new Date((data.dt + data.timezone) * 1000);
        timeSpan.textContent = currentTime.toUTCString();
    }
    
    function displayForecast(data) {
        const forecastDiv = document.querySelector('.weather-widget .forecast');
        const middayForecasts = data.list.filter(item => item.dt_txt.includes('09:00:00'));
    
        forecastDiv.innerHTML = middayForecasts.map(item => {
            const iconUrl = `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;
            return `
                <div class="weather-item">
                    <h4>Date & Time: ${item.dt_txt}</h4>
                    <img src="${iconUrl}" alt="${item.weather[0].description}" />
                    <p data-kelvin="${item.main.temp}">Temperature: ${item.main.temp}°K</p>
                    <p data-kelvin="${item.main.feels_like}">Feels Like: ${item.main.feels_like}°K</p>
                    <p>Description: ${item.weather[0].description}</p>
                    <p>Wind Speed: ${item.wind.speed} m/s</p>
                    <p>Humidity: ${item.main.humidity}%</p>
                </div>
            `;
        }).join('');
    }
    
    function handleCitySearch() {
        const city = document.getElementById('cityInput').value;
        if (city) {
            updateWeatherWidget(city);
        } else {
            alert('Please enter a city name!');
        }
    }
    
    function refreshWeatherData() {
        const currentCity = document.querySelector('.weather-widget .header .place-time span').textContent;
        if (currentCity) {
            updateWeatherWidget(currentCity);
        } else {
            checkGeoSupport();
        }
    }
    
    function kelvinToCelsius(kelvin) {
        return kelvin - 273.15;
    }
    
    function toggleTemperature() {
        const temperatureElements = document.querySelectorAll('.weather-item p[data-kelvin]');
        temperatureElements.forEach(tempElement => {
            const originalKelvin = parseFloat(tempElement.dataset.kelvin);
            if (!isNaN(originalKelvin)) {
                const celsiusValue = kelvinToCelsius(originalKelvin).toFixed(2);
                if (tempElement.textContent.includes('°C')) {
                    tempElement.textContent = tempElement.textContent.replace(`${celsiusValue}°C`, `${originalKelvin}°K`);
                } else {
                    tempElement.textContent = tempElement.textContent.replace(`${originalKelvin}°K`, `${celsiusValue}°C`);
                }
            }
        });
    
        const toggleButton = document.getElementById('tempToggle');
        toggleButton.textContent = toggleButton.textContent === 'Convert to Celsius' ? 'Convert to Kelvin' : 'Convert to Celsius';
    }
    
    
    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        const darkModeButton = document.getElementById('darkModeToggle');
        darkModeButton.textContent = isDarkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode';
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }
    
})();