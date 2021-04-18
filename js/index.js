// ============NAVBAR==========

var nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 10) {
    nav.classList.add("bg-dark", "shadow");
  } else {
    nav.classList.remove("bg-dark", "shadow");
  }
});

// ============COUNTER===========
var a = 0;
$(window).scroll(function () {
  var oTop = $("#counter").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $(".counter-value").each(function () {
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 3500,
            easing: "swing",
            step: function (now) {
              $(this).text(Math.ceil(now) + "+");
            }
          }
        );
    });
    a=1;
  }
});

// Animate on scroll
AOS.init({ duration: 1000 });
