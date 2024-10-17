const swiper = new Swiper('.event-slider', {
    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },
  });
  
  // Add event listeners to the navigation buttons
  document.querySelector('.next').addEventListener('click', () => {
    swiper.slideNext();
  });
  
  document.querySelector('.prev').addEventListener('click', () => {
    swiper.slidePrev();
  });