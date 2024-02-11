
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
    $('.hamburger').on('click', function(e) {
        $('.nav__block').toggleClass('nav__block--view');
        $('body').toggleClass('overflow');
        e.stopPropagation()
    });
    $('.nav__link').on('click', function(e) {
        $('.nav__block').removeClass('nav__block--view');
        $('body').removeClass('overflow');
    });
});

// -------------------DROP--------------------------------

$(document).ready(function() {
    $('.drop').on('click', function(e) {
        $('.drop__box').toggleClass('drop__box--exp');
        e.stopPropagation()
    });
    $(document).on('click', function(e) {
        if ($(e.target).is('.drop__box') === false) {
            $('.drop__box').removeClass('drop__box--exp');
        }
    });
});

// ========================================================================
// Hamburger
// ========================================================================

$(document).ready(function() {
    $('.hamburger').on('click', function() {
        $('.hamburger').toggleClass('hamburger__change');
    });
    $('.nav__link').on('click', function() {
        $('.hamburger').removeClass('hamburger__change');
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


var swiper = new Swiper(".port__slider", {
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
            slidesPerView: 3,
            grid: {
                fill: 'row',
                rows: 2,
            },
        },
        992: {
            slidesPerView: 3,
            grid: {
                fill: 'row',
                rows: 2,
            },
        },
    },
});


// var swiper = new Swiper(".test__slider", {
//     speed: 1000,
//     slidesPerView: 1,
//     loop: true,
//     navigation: {
//         nextEl: ".next",
//         prevEl: ".prev",
//     },
// });


// var swiper = new Swiper(".ser__slider", {
//     speed: 1000,
//     loop: false,
//     // autoplay: {
//     //     delay: 2000,
//     // },
//     navigation: {
//         nextEl: ".next",
//         prevEl: ".prev",
//     },

//     breakpoints: {
//         0: {
//           slidesPerView: 1,
//         },
//         768: {
//           slidesPerView: 2,
//         },
//         992: {
//           slidesPerView: 3,
//         }
//     },
// });

// =================================================================
// ReadMore
// =================================================================

// const ReadSmore = window.readSmore

// const readMoreEls = document.querySelectorAll('.read__more')

// const options = {
//   moreText: 'more',
//   lessText: 'less',
//   wordsCount: 23,
// }

// ReadSmore(readMoreEls, options).init()

// =================================================================
// AOS
// =================================================================

AOS.init({
    duration: 1000,
});

// =================================================================
// Scroll Spy
// =================================================================

window.onload = function () {
    scrollSpy('.nav__block', {
        sectionClass: '.scrollspy',
        menuActiveTarget: '.nav__link',
        activeClass: 'active__link',
        offset: 100,
    })
}

// =================================================================
// Validate
// =================================================================

// $(function() {
//     $(".val").validate({
//         rules: {},
//         messages: {},
//         submitHandler: function(form) {
//             form.submit();
//         }
//     });
// });

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
// Fancy Box
// =================================================================

Fancybox.bind('[data-fancybox]', { });

// =================================================================
// Parallax
// =================================================================

// var image = document.getElementsByClassName('hero__img');
// new simpleParallax(image, {
//     delay: 0,
//     scale: 1.5,
// });