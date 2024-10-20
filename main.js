const images = [
    "image/0001.jpg",
    "image/0002.jpg",
    "image/0003.jpg",
    "image/0004.jpg",
    "image/0005.jpg",
    "image/0006.jpg",
    "image/0007.jpg",
    "image/0008.jpg",
    "image/0009.jpg",
];
const slider = document.getElementById('slider');
const dotsContainer = document.getElementById('dotsContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentSlide = 0;
const maxDots = 3;
function createSlider(images) {
    images.forEach((image, index) => {
        const img = document.createElement('img');
        img.src = image;
        img.alt = `Image ${index + 1}`;
        img.classList.add('slide');
        if (index === 0) img.classList.add('active');
        slider.appendChild(img);
    });
}
function createDots() {
    for (let i = 0; i < maxDots; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === 1) dot.classList.add('active');
        dot.addEventListener('click', () => handleDotClick(i));
        dotsContainer.appendChild(dot);
    }
}
function handleDotClick(dotIndex) {
    if (dotIndex === 0) {
        prevSlide();
    } else if (dotIndex === 2) {
        nextSlide();
    }
}
function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    slides[index].classList.add('active');
    if (index === 0) {
        dots[0].classList.add('active');
    } else if (index === slides.length - 1) {
        dots[2].classList.add('active');
    } else {
        dots[1].classList.add('active');
    }
    prevBtn.classList.toggle('hidden', index === 0);
    nextBtn.classList.toggle('hidden', index === slides.length - 1);
}
function nextSlide() {
    if (currentSlide < images.length - 1) {
        currentSlide++;
        showSlide(currentSlide);
    }
}
function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        showSlide(currentSlide);
    }
}
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
createSlider(images);
createDots();
showSlide(currentSlide);
