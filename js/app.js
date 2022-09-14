$(function(){

  //preloader
  $(window).on('load',function(){
    $('.preloader').fadeOut(1000)
  })



  // BackToTop button
  $(window).on('scroll',function(){
    if ($(window).scrollTop() > 300){
      $('.backToTop').fadeIn(1500)
    }
    else{
      $('.backToTop').fadeOut(1500)
    }
  })
  $('.backToTop').on('click',function(){
    $('html,body').animate({
        scrollTop:0,
    })
  })




   // Fixed Navbar
   $(window).on('scroll',function(){
    if ($(window).scrollTop()>$('.navbar').height()){
        $('.navbar').addClass('fixed-menu')
    }
    else {
        $('.navbar').removeClass('fixed-menu')
    }
   })






  $(".menuToggler").click(function () {
    let logo = $("nav .navbar-logo");
    let navMenu = $("#customNav ul");
    logo.toggleClass("activeLogo");
    navMenu.toggleClass("activeNavMenu");
  });


  $('.banner-images').slick({
      prevArrow: ".leftarrow",
      nextArrow: ".rightarrow",
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      fade: true,
  });
  $('.service-slider').slick({
      slidesToShow: 3,
      autoplay: true,
      prevArrow: ".serviceleftarrow",
      nextArrow: ".servicerightarrow",
      responsive: [
      {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true
          }
      },
      {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
      },
      {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
      }
    }

        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
  });
  $('.blog-sliders').slick({
      slidesToShow: 3,
      centerMode: true,
      centerPadding: 0,
      // autoplay: true,
      prevArrow: ".blogLeftArrow",
      nextArrow: ".blogRightArrow",
      responsive: [
      {
          breakpoint: 991,
          settings: {
            centerMode: true,
            centerPadding: 0,
            slidesToShow: 2
          }
      },
      {
          breakpoint: 576,
          settings: {
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 1
          }
    }
   ]
  })
  $("#counter1").countMe(20,10);
  $("#counter2").countMe(20,10);
  $("#counter3").countMe(20,10);
  $("#counter4").countMe(20,10);


  $(".testimonial-content").slick({
    asNavFor: '.testimonial-img',
    prevArrow: ".testimonialLeftArrow",
    nextArrow: ".testimonialRightArrow",
    fade: true,
    slidesToScroll: 1,
    infinite: true,
  })
  $(".testimonial-img").slick({
    arrows: false,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    asNavFor: '.testimonial-content',
    slidesToScroll: 1,
    infinite: true,
  })


  $(".sites-img").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: ".sitesLeftArrow",
    nextArrow: ".sitesRightArrow",
    centerMode: true,
    centerPadding: 0,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  })



  $(".team-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: ".sitesLeftArrow",
    nextArrow: ".sitesRightArrow",
    centerMode: true,
    centerPadding: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  })
  
 var mixer = mixitup(".filtered-items");
  mixer.filter('.popular')

});