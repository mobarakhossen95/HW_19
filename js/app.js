// jquery starts
$(function () {
  $(".slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: ".leftArrow",
    nextArrow: ".rightArrow",
    centerMode: true,
    centerPadding: "0px",
    dots: true,
    dotsClass: "myCustomDots",
  });

// nav slider

  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });
});
// jquery ends