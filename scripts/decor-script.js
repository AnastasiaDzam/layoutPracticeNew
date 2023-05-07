$('.header-menu__li').click(function () {
  $('.about-nav-li').css('background-color', 'inherit');
  $('.header-menu__li').css('text-decoration', 'none');
  $('.about__links').css('color', '#2F2F51');
  $('.header-menu__link').css('color', 'inherit');
  $(this).css('text-decoration', 'underline solid yellow');
  $(this).css('text-underline-offset', '-56px');
  $(this).css('text-decoration-thickness', '4px');
  $(this.firstElementChild).css('color', '#EF7F04');
});
$('.logo-link').click(function () {
  $('.header-menu__li').css('text-decoration', 'none');
  $('.header-menu__link').css('color', 'inherit');
});

$('.about__li').click(function () {
  $('.about__links').css('color', '#2F2F51');
  $('.about__li').css('color', '#2F2F51');
  $('.about__li').css('background-color', 'inherit');
  $('.about__li').css('border-radius', '3px');
  $(this).css('background-color', '#EF7F04');
  $(this.firstElementChild).css('color', 'white');
});