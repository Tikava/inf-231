let loadCount = 0;
const MAX_LOADS = 5; // This sets the limit to 5 loads (after the initial load)
let isLoading = false;

window.addEventListener('DOMContentLoaded', (event) => {
    loadImages();
});

window.addEventListener('scroll', () => {
    if ((window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 500)) {
        loadMoreImages();
    }
});


function loadImages() {
    const gallery = document.getElementById('gallery');
    
    fetch(`https://api.unsplash.com/photos/random?count=3&client_id=${ACCESS_KEY}`)
    .then(response => response.json())
    .then(data => {
        data.forEach(photo => {
            const img = document.createElement('img');
            img.src = photo.urls.small;
            gallery.appendChild(img);
        });
    })
    .catch(error => {
        console.error("There was an error fetching photos from Unsplash:", error);
    });
}


function loadMoreImages() {
    // Check if we've already reached the maximum number of loads.
    if (loadCount >= MAX_LOADS) {
        console.log('Reached maximum load limit.');
        return;
    }

    // Check if images are currently being loaded.
    if (isLoading) {
        return;
    }

    isLoading = true;
    const loading = document.getElementById('loading');
    loading.style.display = 'block';

    setTimeout(() => {
        loadImages();
        loading.style.display = 'none';
        isLoading = false;
        loadCount++; // Increase the load count
    }, 1000);
}


