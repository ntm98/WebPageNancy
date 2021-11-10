$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.nav-page').addClass("sticky");
        } else {
            $('.nav-page').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    var marker = document.querySelector('#marker');
    var item = document.querySelectorAll('.menu li');
    //slide-up script
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.nav-page .menu li a').click(function() {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");

    });

    //toggle menu/navbar script
    $('.menu-btn').click(function() {
        $('.nav-page .menu').toggleClass("active");
        $('.menu').toggleClass("stick");
        $('.menu-btn i').toggleClass("active")
    });

    //owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 200,
        autoPlayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});


/*

$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) { $('.navbar').addClass("sticky"); } else { $('.navbar').removeClass("sticky"); }
        if (this.scrollY > 500) { $('.scroll-up-btn').addClass("show"); } else { $('.scroll-up-btn').removeClass("show"); }
    });
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
        $('html').css("scrollBehavior", "auto");
    });
    $('.navbar .menu li a').click(function() { $('html').css("scrollBehavior", "smooth"); });
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: { items: 1, nav: false },
            600: { items: 2, nav: false },
            1000: { items: 3, nav: false }
        }
    });
});
*/