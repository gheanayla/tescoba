let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');

function updateCarousel() {
    images.forEach((img, index) => {
        img.classList.toggle('active', index === currentIndex);
    });
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
}

// Inisialisasi tampilan awal
updateCarousel();
