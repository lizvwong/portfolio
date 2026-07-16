// ----------------------------------
// ------IMAGE CAROUSEL STUFF---------
// ----------------------------------

const carousels = document.querySelectorAll('.carousel');

carousels.forEach(carousel => {
  const inner = carousel.querySelector('.carousel-inner');
  const slides = carousel.querySelectorAll('.slide');
  const prevBtn = carousel.querySelector('.prev');
  const nextBtn = carousel.querySelector('.next');
  
  let index = 0; 

  function updateCarousel() {
    inner.style.transform = `translateX(-${index * 100}%)`;
  }

  nextBtn.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    updateCarousel();
  });

  prevBtn.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    updateCarousel();
  });
});   