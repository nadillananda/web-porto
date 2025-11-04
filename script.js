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
    strings: ["full-stack", "multimedia design", "network infrastructure", " videography"],
    typeSpeed: 120,
    backSpeed: 100,
    loop: true,
  });

  // experience 
  $(document).on("click", ".text-item, .experience-text", function(e) {
    e.stopPropagation();
    
    const textItem = $(this).closest(".text-item").length > 0 
      ? $(this).closest(".text-item")[0]
      : this;
    
    if (textItem) {
      const $textItem = $(textItem);
      const experience = $textItem.data("experience");
      const $experienceContent = $("#" + experience);
      
      if ($experienceContent.length > 0) {
        const isActive = $experienceContent.hasClass("active");
        
        if (isActive) {
          return;
        } else {
          $(".experience-content").removeClass("active");
          $(".text-item").removeClass("active");
          
          $experienceContent.addClass("active");
          $textItem.addClass("active");
        }
      }
    }
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
