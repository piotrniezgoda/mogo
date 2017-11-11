$(document).ready(function(){
  menu();
  clickClose();
  searchInput();
  function menu() {
    $('.menu').addClass('menu-close');
    $('.nav__hamburger').click(function() {
      $('.menu').toggleClass('menu-close');
      $('.icons-group').toggleClass('icons-group--background');
      $(this).toggleClass('nav__hamburger--active');
    })
  }

  function clickClose() {
    $('.menu__item-link').each(function() {
      $(this).click(function() {
        $('.menu').addClass('menu-close');
        $('.nav__hamburger').removeClass('nav__hamburger--active');
      })
    })
  }

  function searchInput() {
    $('.search-btn').click(function(event) {
      event.preventDefault();
      $('.search-input').toggleClass('search-input--open');
    })
};
});
