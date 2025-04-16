$(window).on("scroll", function () {
  let scroll = $(window).scrollTop();
  if (scroll >= 50) {
    $(".sticky").addClass("stickyadd");
    $(".hamburger-icon").removeClass("text-white");
  } else {
    $(".sticky").removeClass("stickyadd");
    $(".hamburger-icon").addClass("text-white");
  }
});

$(".navbar-toggler").on("click", function () {
  $(".hamburger-icon").toggleClass("fa-bars fa-times");
});
