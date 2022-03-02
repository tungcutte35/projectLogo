$(document).ready(function () {
  $(".about-meet-boxbig").slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    infinite: true,
    dots: false,
    prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
    nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
    dots: true,
  });
});
