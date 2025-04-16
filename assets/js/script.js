$(window).on("scroll", function () {
  let scroll = $(window).scrollTop();
  if (scroll >= 50) {
    $(".sticky").addClass("stickyadd");
    $(".hamburger-color").removeClass("text-white");
  } else {
    $(".sticky").removeClass("stickyadd");
    $(".hamburger-color").addClass("text-white");
  }
});
