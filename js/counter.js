 $(document).ready(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 150) {
            counter();
        }
     });

     function counter() {
      $('.counter__projects-number').each(function () {
        $(this).prop('Counter',0).animate({
             Counter: $(this).text()
        }, {
             duration: 5000,
            easing: 'swing',
             step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
 };
  });
