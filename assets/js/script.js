$(document).ready(function () {

    $('.search-icon-link').click(function () {
        $('body').toggleClass('search-open');
    });

    $(document).on('click', '.search-icon-link', function (event) {
        event.preventDefault();
        if ($('.inputSearch').hasClass('active')) {
            $('.inputSearch').hide();
            $('.inputSearch').removeClass('active');
            $('.search.float-right').removeClass('active');
        } else {
            $('.inputSearch').addClass('active');
            $('.search.float-right').addClass('active');
            $('.inputSearch').show();
            // $(".inputSearch").slideUp('slow');   
            $('.inputSearch').focus();
        }
    });

    // Sticky Header
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 100) {
            $('.mobile__header, .desktop__header-hide').addClass('is-sticky');
        } else {
            $('.mobile__header, .desktop__header-hide').removeClass('is-sticky');
        }
    });

    // Search Bar
    $('.search-open').click(function () {
        $('.search-close, .searchform-main').css('display', 'block');
        $('.search-open').css('display', 'none');
        $('.mobile__header .mobile__header__inner--logo, .mobile__header .toggle-menu').css('visibility', 'hidden').css('opacity', '0');
    });
    $('.search-close').click(function () {
        $('.search-open').css('display', 'block');
        $('.search-close, .searchform-main').css('display', 'none');
        $('.header__menu-right, .mobile__header .mobile__header__inner--logo, .mobile__header .toggle-menu').css('visibility', 'unset').css('opacity', '1');
    });

    /*Mobile Menu*/
    $('.navbar-toggler svg').click(function () {
        $('body').toggleClass('no-scroll');
        $(".navbar-collapse").toggleClass("show");
        // $('.toggle-menu svg').css('color', '#2091E8');
    });

    $('.mb-menu-close').click(function () {
        $('body').removeClass('no-scroll');
    });

    // $('.menu-item-has-children').on('click', function () {
    //     $(this).siblings().removeClass('sub-menu-open')
    //     $(this).toggleClass('sub-menu-open');
    // });

    $('.menu-item-has-children').hover(function () {
        $(this).siblings().removeClass('sub-menu-open')
        $(this).toggleClass('sub-menu-open');
    });

    // Hero Banner Slider
    if ($('.herobanner-wrapper').length) {
        var herobannerslider = new Swiper(".herobanner--slider", {
            spaceBetween: 1,
            slidesPerView: 1,
            speed: 1000,
            spaceBetween: 0,
            loop: true,
            // autoplay: {
            //     delay: 3000,
            // },
            navigation: {
                nextEl: ".herobanner-next-arrow",
                prevEl: ".herobanner-prev-arrow"
            },
        });
    }

    // Testimonial Slider
    if ($('.section-testimonial').length) {
        var testimonialslider = new Swiper(".testimonial-slide", {
            slidesPerView: 1.5,
            spaceBetween: 40,
            loop: true,
            speed: 1000,
            navigation: {
                nextEl: ".testimonial-button-next",
                prevEl: ".testimonial-button-prev",
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                640: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 1.5,
                    spaceBetween: 40,
                },
            },
        });
    }

    // Brand Slider 
    if ($('.footer').length) {
        var accredidationsslider = new Swiper(".accredidations-slide", {
            slidesPerView: 1,
            spaceBetween: 60,
            loop: true,
            speed: 4000,
            autoplay: {
                delay: 100,
                disableOnInteraction: false,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1.7,
                    spaceBetween: 40,
                    centeredSlides: true,
                },
                640: {
                    centeredSlides: true,
                    slidesPerView: 3.5,
                    spaceBetween: 40,
                },
                768: {
                    centeredSlides: true,
                    slidesPerView: 4.5,
                    spaceBetween: 50,
                },
                1024: {
                    centeredSlides: true,
                    slidesPerView: 5.5,
                    spaceBetween: 60,
                },
                1366: {
                    centeredSlides: true,
                    slidesPerView: 6.5,
                    spaceBetween: 80,
                },
            },
        });
    }

    // Treatment Slider  
    if ($('.treatment-grid-wrapper').length) {
        var treatmentgridslider = new Swiper(".treatment-grid__mobile--slider", {
            slidesPerView: 1,
            spaceBetween: 60,
            loop: true,
            speed: 1000,
            navigation: {
                nextEl: ".treatment-button-next",
                prevEl: ".treatment-button-prev",
            },
            breakpoints: {
                320: {
                    slidesPerView: 1.2,
                    spaceBetween: 20,
                    centeredSlides: true,
                },
                1920: {
                    centeredSlides: true,
                    slidesPerView: 6.5,
                    spaceBetween: 80,
                },
            },
        });
    }

    // Footer Mobile Menu
    if ($('.footer').length) {
        $(document).ready(function () {
            var accordionOpen = $('.first_depth .title'),
                secondDepth = $('.second_depth');

            accordionOpen.on('click', function () {
                accordionOpen.closest('.first_depth').removeClass('on');
                $(this).closest('.first_depth').addClass('on');

            });
        });
    }

    // Match Heigh Js
    // $(function () {
    //     $('.icon-content-card__inner, .image-content-card__inner').matchHeight(); 
    // });      

    // Tab
    if ($('.tab-wrapper').length) {
        $(document).ready(function () {
            // $('ul.tabs li').on('click', function () {
            //     var tab_id = $(this).attr('data-tab');
            //     $('ul.tabs li').removeClass('current');
            //     $('.tab-content').removeClass('current');
            //     $(this).addClass('current');
            //     $("#" + tab_id).addClass('current');
            // })
            // $('.tab-content-main > .tab-content:first-child').addClass('current');
            // $('.megamenu-tab--list .tabs > .tab-link[data-tab]:first-child').addClass('current');
            // $('ul.tabs li').on('click', function () {
            //     var tab_id = $(this).attr('data-tab');
            //     if ($(this).hasClass('current')) {
            //         $(this).siblings('.tab-link').removeClass('current');                    
            //         $('.tab-content').siblings('.tab-content').removeClass('current');                                               
            //     } else{                 
            //         $(this).siblings('.tab-link').addClass('current');
            //         $("#" + tab_id).siblings('.tab-content').addClass('current');
            //     }                
            // });

            

        });
    }
});