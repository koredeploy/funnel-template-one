
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');
// const track = document.querySelector('.carousel-track');
// const slides = document.querySelectorAll('.carousel-slide');
// const prevButton = document.querySelector('.prev-button');
// const nextButton = document.querySelector('.next-button');
// let currentIndex = 0;


hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});


document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }
});

// function updateCarousel() {
//   track.style.transform = `translateX(-${currentIndex * 100}%)`;
// }

// prevButton.addEventListener('click', () => {
//   currentIndex = (currentIndex - 1 + slides.length) % slides.length;
//   updateCarousel();
// });

// nextButton.addEventListener('click', () => {
//   currentIndex = (currentIndex + 1) % slides.length;
//   updateCarousel();
// });

const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let currentIndex = 0;

// Function to check if we're on desktop view
function isDesktop() {
  return window.innerWidth >= 768;
}

// Function to update slide positions and classes
function updateCarousel() {
  const slidesToShow = isDesktop() ? 3 : 1;
  const slideWidth = 100 / slidesToShow;
  const maxIndex = slides.length - (isDesktop() ? 3 : 1);
  
  // Update transform
  track.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
  
  // Reset all slides
  slides.forEach(slide => {
    slide.classList.remove('middle');
  });
  
  // If on desktop, add middle class to the center slide
  if (isDesktop() && slides[currentIndex + 1]) {
    slides[currentIndex + 1].classList.add('middle');
  }
}

// Event listeners for buttons
prevButton.addEventListener('click', () => {
  const slidesToShow = isDesktop() ? 3 : 1;
  const maxIndex = slides.length - slidesToShow;
  currentIndex = Math.max(currentIndex - 1, 0);
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  const slidesToShow = isDesktop() ? 3 : 1;
  const maxIndex = slides.length - slidesToShow;
  currentIndex = Math.min(currentIndex + 1, maxIndex);
  updateCarousel();
});

// Update carousel on window resize
window.addEventListener('resize', updateCarousel);