
// =================================================================
// Scrolled Change
// =================================================================

$(window).scroll(function(){
    $('.nav__bar').toggleClass('scroll', $(this).scrollTop() > 1);
});

// ========================================================================
// Open Close
// ========================================================================

// -------------------NAV--------------------------------

$(document).ready(function() {
    $('.hamburger').on('click', function() {
        $('.nav__block').toggleClass('nav__block--view');
        $('body').toggleClass('overflow');
    });
});

// ========================================================================
// Hamburger
// ========================================================================

$(document).ready(function() {
    $('.hamburger').on('click', function() {
        $('.hamburger').toggleClass('hamburger__change');
    });
});

// =================================================================
// Ajax Form
// =================================================================

$(document).on('submit', '.ajax_main', function(event) {
event.preventDefault();

var data = new FormData(this);

   $.ajax({
      method: $(this).attr('method'),
      url: $(this).attr('action'),
      data: data,
      async : true,
      contentType: false,
      cache: false,            
      processData:false,
      success: function (data) {
         console.log(data);
         $('.result').html(data);
         $('.ajax_main').trigger('reset');
         // setInterval('location.reload()', 1000);
      }

   });

});

// =================================================================
// Swiper Slider
// =================================================================


var swiper = new Swiper(".fac__slider", {
    speed: 1000,
    autoplay: {
        delay: 1000,
    },
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
            grid: {
                fill: 'row',
                rows: 1,
            },
        },
        768: {
            slidesPerView: 2,
            grid: {
                fill: 'row',
                rows: 4,
            },
        },
    },
});


var swiper = new Swiper(".test__slider", {
    speed: 1000,
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
});


var swiper = new Swiper(".ser__slider", {
    speed: 1000,
    loop: false,
    // autoplay: {
    //     delay: 2000,
    // },
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },

    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        }
    },
});

// =================================================================
// ReadMore
// =================================================================

// const ReadSmore = window.readSmore

// const readMoreEls = document.querySelectorAll('.read__more')

// const options = {
//   moreText: '<div class="btn__main">More</div>',
//   lessText: '<div class="btn__main">Less</div>',
//   wordsCount: 23,
// }

// ReadSmore(readMoreEls, options).init()

// =================================================================
// Validate
// =================================================================

$(function() {
$(".val").validate({

rules: {},

messages: {},

submitHandler: function(form) {
form.submit();
}

});
});

// ========================================================================
// Skill Bar
// ========================================================================

var offsetTop = $('.bar').offset().top;
    
$(window).scroll(function() {
    var height = $(window).height();
    if($(window).scrollTop()+height > offsetTop) {

        jQuery('.bar__thumb').each(function(){
            jQuery(this).find('.bar__prog').animate({
            width:jQuery(this).attr('data-percent')
            },2000);
        });
    }
});

// =================================================================
// AOS
// =================================================================

AOS.init();

// =================================================================
// Fancy Box
// =================================================================

Fancybox.bind('[data-fancybox]', { 
});

// =================================================================
// Parallax
// =================================================================

var image = document.getElementsByClassName('hero__img');
new simpleParallax(image, {
    delay: 0,
    scale: 1.5,
});

// =================================================================
// JS Submit To WhatsApp
// =================================================================

// $(document).on('submit', '.pur__sec', function(event) {
// event.preventDefault();

//     var name = document.querySelector(".name").value;
//     var new__price = document.querySelector(".new__price").value;
//     var inc__num = document.querySelector(".inc__num").value;
//     var url = document.querySelector(".url").value;
//     var msg = "Thank you, we will get back to you shortly..";
//     var phone = "9999999999";
  
//     location.href = `https://wa.me/${phone}?text=${name}%0aRs.${new__price} (${inc__num})%0a${msg}%0a${url}`;
// });