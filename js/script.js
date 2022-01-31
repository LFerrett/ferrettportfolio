var instance = M.Carousel.init({
  fullWidth: true
});

// Or with jQuery

$('.carousel.carousel-slider').carousel({
  fullWidth: true
});


document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, options);
});