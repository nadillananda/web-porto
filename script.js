$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation
  var typed = new Typed(".typing", {
    strings: ["everything in between."],
    typeSpeed: 100,
  });

  var typed = new Typed(".typing-2", {
    strings: ["full-stack development", "website design", "video editing"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // experience
  document.addEventListener("DOMContentLoaded", function () {
    function showExperience(experience) {
      // hide all experience descriptions
      document.querySelectorAll(".experience-content").forEach((section) => {
        section.classList.remove("active");
      });

      // remove 'active' class from all text items
      document.querySelectorAll(".text-item").forEach((item) => {
        item.classList.remove("active");
      });

      // show selected experience INI GABISA BISA WOI PUSING T____T
      const selectedExperience = document.getElementById(experience);
      if (selectedExperience) {
        selectedExperience.classList.add("active");
      }

      const selectedTextItem = document.querySelector(`.text-item[data-experience="${experience}"]`);
      if (selectedTextItem) {
        selectedTextItem.classList.add("active");
      }
    }

    document.querySelectorAll(".text-item").forEach((item) => {
      item.addEventListener("click", function () {
        showExperience(this.dataset.experience);
      });
    });

    showExperience("work");
  });

  // owl carousel
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});
