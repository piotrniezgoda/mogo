$(document).ready(function(){
  let panels = $('.accordion__item > p').hide();

  panels.first().show();
  panels.prev().first().addClass('active');
  $('.accordion__item > h3').click(function() {
     if ($(this).hasClass('active')) {
         $(this).removeClass('active');
     } else {
         $(this).closest('.accordion').find('h3.active').removeClass('active');
         $(this).addClass('active');
     }
    let $this = $(this);

    panels.slideUp();

    $this.next().slideDown();
  })
});
