const galleryItems = document.querySelectorAll(".gallery-item");
const tooltip = document.getElementById("customTooltip");
const tooltipTitle = document.getElementById("tooltipTitle");
const tooltipDescription = document.getElementById("tooltipDescription");

galleryItems.forEach(item => {
    item.addEventListener("mouseenter", () => {
        const title = item.getAttribute("data-title");
        const description = item.getAttribute("data-description");
        const rect = item.getBoundingClientRect();
        const top = rect.top - tooltip.offsetHeight - 10;
        const left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2;

        tooltipTitle.textContent = title;
        tooltipDescription.textContent = description;
        tooltip.style.top = `${top}px`;
        tooltip.style.left = `${left}px`;
        tooltip.style.display = "block";
    });

    item.addEventListener("mouseleave", () => {
        tooltip.style.display = "none";
    });
});

const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

let currentImageIndex = 0;

function showImage(index) {
    if (index < 0) {
        currentImageIndex = galleryItems.length - 1;
    } else if (index >= galleryItems.length) {
        currentImageIndex = 0;
    }

    galleryItems.forEach((item, i) => {
        if (i === currentImageIndex) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

prevButton.addEventListener("click", () => {
    currentImageIndex--;
    showImage(currentImageIndex);
});

nextButton.addEventListener("click", () => {
    currentImageIndex++;
    showImage(currentImageIndex);
});

showImage(currentImageIndex);