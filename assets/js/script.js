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

// Title animation

const typed = new Typed("#typed", {
  strings: ["Houcine HANNOUN.", "un Developpeur Web.", "un Ingénieur Industriel en reconversion."],
  typeSpeed: 70,
  smartBackspace: true,
  backSpeed: 35,
  backDelay: 1000,
  startDelay: 1000,
  loop: true,
  showCursor: false
});
