let slideIndex = 0;
export const slides = document.querySelectorAll('.slide');

function showSlide() {
    slides.forEach(slide => {
        slide.style.display = 'none';
    });
    slides[slideIndex].style.display = 'block';
}

function nextSlide() {
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    showSlide();
}

function prevSlide() {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlide();
}

showSlide();
