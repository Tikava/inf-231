document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("searchInput");
    const suggestionList = document.getElementById("suggestionList");

    fetch("suggestions.json")
        .then(response => response.json())
        .then(data => {
            const suggestions = data.suggestions;

            searchInput.addEventListener("input", function() {
                const query = searchInput.value.toLowerCase();
                const filteredSuggestions = suggestions.filter(suggestion => suggestion.toLowerCase().includes(query));
                displaySuggestions(filteredSuggestions);
            });
        })
        .catch(error => console.error("Error fetching suggestions:", error));

    function displaySuggestions(suggestions) {
        suggestionList.innerHTML = "";
        suggestions.forEach(suggestion => {
            const listItem = document.createElement("li");
            listItem.textContent = suggestion;
            listItem.addEventListener("click", function() {
                searchInput.value = suggestion;
                suggestionList.innerHTML = "";
            });
            suggestionList.appendChild(listItem);
        });
    }

    document.addEventListener("click", function(event) {
        if (!event.target.closest(".autocomplete")) {
            suggestionList.innerHTML = "";
        }
    });
});
