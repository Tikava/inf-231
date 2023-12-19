const toggleButton = document.getElementById('toggle-button');
const content = document.getElementById('content');

toggleButton.addEventListener('click', () => {
    content.classList.toggle('active');
});
