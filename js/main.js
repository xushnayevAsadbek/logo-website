let slideIndex = 0; 
const totalSlides = document.querySelectorAll('.slide').length;
let slideInterval;
const slideOrder = [0, 1, 2, 1]; 
let currentStep = 0; 
function showSlide(index) {
  const slides = document.querySelector('.slider');
  const dots = document.querySelectorAll('.dot');
  slideIndex = slideOrder[index];

  slides.style.transform = `translateX(${-slideIndex * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[slideIndex].classList.add('active');
}

function moveSlide() {
  currentStep++;

  if (currentStep >= slideOrder.length) {
    currentStep = 0;
  }

  showSlide(currentStep);
  resetInterval();
}

function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(moveSlide, 5000); 
}

slideInterval = setInterval(moveSlide, 3000);

showSlide(currentStep);

function manualSlide(index) {
  currentStep = index;
  showSlide(currentStep);
  resetInterval();
}

// acardion
const accordionButtons = document.querySelectorAll('.accordion-button');
accordionButtons.forEach(button => {
  button.addEventListener('click', () => {
    const activeButton = document.querySelector('.accordion-button.active');
    if (activeButton && activeButton !== button) {
      activeButton.classList.remove('active');
      activeButton.nextElementSibling.style.maxHeight = '0';
    }
    const content = button.nextElementSibling;
    if (button.classList.contains('active')) {
      button.classList.remove('active');
      content.style.maxHeight = '0';
    } else {
      button.classList.add('active');
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
});

