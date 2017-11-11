$(document).ready(function() {
  let count = 0;
  let slideWidth = 0;
  let totalSlides = $('.items > div').length;

  $('.button-next').click(function() {
    slideRight();
  })

  $('.button-prev').click(function() {
    slideLeft();
  })

  setInterval(slideRight, 12000);

  function slideRight() {
    count++
    slideWidth = -(count*100) + '%';
     if(count === totalSlides) {
      count = 0;
      slideWidth = 0;
      $('.items').css({'transform': 'translateX('+ slideWidth +')'})
    }
    $('.items').css({'transform': 'translateX('+ slideWidth +')'})
  }

  function slideLeft() {
    if(count === 0) {
      count = totalSlides;
      $('.items').css({'transform': 'translateX('+ slideWidth +')'})
    }
    count --
    slideWidth = -(count*100) + '%';
    $('.items').css({'transform': 'translateX('+ slideWidth +')'})
  }
});
