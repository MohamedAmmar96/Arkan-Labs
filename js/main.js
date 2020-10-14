$(window).on('load', function() {

    $(".loading-overlay img").fadeOut(500,
        function() {
            $(this).parent().fadeOut(500);
            $("body").removeClass("overflow")
        });
})


var wow = new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null, // optional scroll container selector, otherwise use window,
    resetAnimation: true, // reset animation on end (default is true)
});
wow.init();


$(document).ready(function() {

    $('.main-slider .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        rtl: true,
        margin: 20,
        navText: ["<span class='fas fa-chevron-right'></span>", "<span class='fas fa-chevron-left'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true,
                loop: true
            },
            768: {
                items: 1,
                nav: false,
                dots: true,
                loop: true
            },
            992: {
                items: 1,
                nav: true,
                dots: true,
                loop: true
            },
            1200: {
                items: 1,
                nav: true,
                dots: true,
                loop: true
            }
        }
    });

    $('.new-arrivals .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        rtl: true,
        margin: 30,
        navText: ["<span class='fas fa-chevron-right'></span>", "<span class='fas fa-chevron-left'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false,
                loop: true
            },
            480: {
                items: 2,
                dots: true,
                nav: false,
                loop: true
            },
            720: {
                items: 3,
                dots: true,
                nav: false,
                loop: true
            },
            992: {
                items: 4,
                nav: false,
                dots: true,
                loop: true
            },
            1200: {
                items: 4,
                nav: true,
                dots: false,
                loop: true
            }
        }
    });

    $('.testimonials .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        rtl: true,
        margin: 30,
        navText: ["<span class='fas fa-chevron-right'></span>", "<span class='fas fa-chevron-left'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false,
                loop: true
            },
            480: {
                items: 1,
                dots: true,
                nav: false,
                loop: true
            },
            720: {
                items: 2,
                dots: true,
                nav: false,
                loop: true
            },
            992: {
                items: 2,
                nav: false,
                dots: true,
                loop: true
            },
            1200: {
                items: 3,
                nav: true,
                dots: false,
                loop: true
            }
        }
    });

    //this is to make the Brands part as owl-carousel slider  
    if ($(window).width() <= 991) {
        $(".cat").unwrap();
        $(".cats-offers .cats-box").addClass("owl-carousel owl-theme");
        $(".cats-box .cat").removeClass("owl-carousel");
        $('.cats-offers .owl-carousel').owlCarousel({
            loop: false,
            margin: 20,
            rtl: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    loop: false
                },
                500: {
                    items: 2,
                    nav: false,
                    loop: false
                },
                768: {
                    items: 3,
                    nav: false,
                    loop: false
                }
            }
        })
    } else {
        $(".brands .brands-box").removeClass("owl-carousel");
        $(".brands-box .brand").removeClass("owl-carousel");
    };

    if ($(window).width() <= 991) {
        $(".brands .brands-box").addClass("owl-carousel owl-theme");
        $(".brands-box .brand").removeClass("owl-carousel");
        $('.brands .owl-carousel').owlCarousel({
            loop: false,
            margin: 30,
            rtl: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2,
                    nav: false,
                    loop: false
                },
                768: {
                    items: 3,
                    nav: false,
                    loop: false
                }
            }
        })
    } else {
        $(".services-content").removeClass("owl-carousel");
        $(".services-content .element").removeClass("owl-carousel");
    };


    // To Toggle Between Footer Slide Menus
    if ($(window).width() <= 991) {
        $('.collapse[data-parent="#parent"]').on('show.bs.collapse', function() {
            $('.collapse[data-parent="#parent"]').not(this).collapse('hide');
        });
    } else {
        $(".slide-list").addClass("in")
    }



    // This is To Open search Box In Small Screens
    $(".terms .search").click(function() {
        $("body").addClass("overflow");
        $(".overlay-box2").slideDown(300);
    });

    $(".terms .search").click(function() {
        $("body").addClass("overflow");
        $(".search .search-icon").removeClass("open-search")
        $(".search .search-icon").addClass("close-search")
        $(".close-search-btn").show(300)
        $(".search-box").slideDown(300);
    });

    $(".close-search-btn,.overlay-box2").click(function() {
        $("body").removeClass("overflow");
        $(".overlay-box2").slideUp(300);
    });

    $(".close-search-btn,.overlay-box2").click(function() {
        $("body").removeClass("overflow");
        $(".search .search-icon").addClass("open-search")
        $(".search .search-icon").removeClass("close-search")
        $(".close-search-btn").hide(300)
        $(".search-box").slideUp(300);
    });


    //This is to Open Side Menu in Small Screens
    $(".terms .menu").click(function() {
        $("body").addClass("overflow")
        $(".nav").addClass("menu-open");
        $(".overlay-box").fadeIn(500);
    });

    $(".close,.overlay-box").click(function() {
        $("body").removeClass("overflow")
        $(".nav").removeClass("menu-open");
        $(".overlay-box").fadeOut(500);
    });
    //This is to Open user-config, language & Products Menus in Small Screens Side Menu

    $(".nav .config-name").click(function() {
        $(".nav .config-name").toggleClass("rotate");
        $(".nav .config-list").slideToggle(300);
    });

    $(".nav .lang-name").click(function() {
        $(".nav .lang-name").toggleClass("rotate");
        $(".nav .lang-list").slideToggle(300);
    });

    $(".nav .mega-big-link").click(function() {
        $(".nav .mega-big-link").toggleClass("rotate");
        $(".nav .megamenu").slideToggle(300);
    });

    $(".nav .mega-open-list").click(function() {
        $(".nav .mega-open-list").toggleClass("rotate");
        $(".nav .megamenu .small").slideToggle(300);
    });

    $(".first .footer-heading .footer-link").click(function() {
        var x = $(".first .slide-list")
        if (x.hasClass("collapse")) {
            $(".first .footer-heading .footer-link").addClass("rotate")
            $(".second .footer-heading .footer-link").removeClass("rotate")
            $(".last .footer-heading .footer-link").removeClass("rotate")
        }
    });
    $(".first .footer-heading .footer-link").click(function() {
        var x = $(".first .slide-list")
        if (x.hasClass("in")) {
            $(".first .footer-heading .footer-link").removeClass("rotate")
        }
    });


    $(".second .footer-heading .footer-link").click(function() {
        var x = $(".second .slide-list")
        if (x.hasClass("collapse")) {
            $(".second .footer-heading .footer-link").addClass("rotate")
            $(".first .footer-heading .footer-link").removeClass("rotate")
            $(".last .footer-heading .footer-link").removeClass("rotate")
        }
    });
    $(".second .footer-heading .footer-link").click(function() {
        var x = $(".second .slide-list")
        if (x.hasClass("in")) {
            $(".second .footer-heading .footer-link").removeClass("rotate")
        }
    });

    $(".last .footer-heading .footer-link").click(function() {
        var x = $(".last .slide-list")
        if (x.hasClass("collapse")) {
            $(".last .footer-heading .footer-link").addClass("rotate")
            $(".first .footer-heading .footer-link").removeClass("rotate")
            $(".second .footer-heading .footer-link").removeClass("rotate")
        }
    });
    $(".last .footer-heading .footer-link").click(function() {
        var x = $(".last .slide-list")
        if (x.hasClass("in")) {
            $(".last .footer-heading .footer-link").removeClass("rotate")
        }
    });

});