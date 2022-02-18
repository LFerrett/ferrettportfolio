var instance = M.Carousel.init({
  fullWidth: true,
});

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".carousel");
  var instances = M.Carousel.init(elems, options);
});

$(document).ready(function () {
  $(".modal").modal();
});

var mb = document.querySelectorAll(".materialboxed");
M.Materialbox.init(mb, {});
