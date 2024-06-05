$(document).ready(function () {


    var w = $(window).width(), h = $(window).height();


    $('.mega.dropdown').hover(function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(400);
        $(this).addClass("active");
    }, function () {
        $(this).removeClass("active");
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(400);
    });

    new WOW().init();


    $('[data-toggle="tooltip"]').tooltip()

    let fclick = false;
    let eclick;

    $('.focus').click(function () {
        fclick = true;
        eclick = $(this);
    });

    $(window).click(function () {


        if (fclick === true) {

            $(".focus").removeClass('focus-active');
            $(eclick).addClass('focus-active');
            fclick = false;

        } else {
            $(".focus").removeClass('focus-active');

        }


    });

    let c = 0;
    $('.input-show').click(function () {
        c++;
        $(this).toggleClass('icon-hide').toggleClass('icon-invisible').toggleClass('icon-show');
        let inputhidden = $(this).parent().find('input');
        let typ = inputhidden.attr('type');

        if (c === 1) {
            if (typ === 'text') {
                inputhidden.attr({type: "password"})
            } else {
                inputhidden.attr({type: "text"})

            }
        }
        if (c === 2) {
            if (typ === 'text') {
                inputhidden.attr({type: "password"})
            } else {
                inputhidden.attr({type: "text"})

            }

            c = 0;
        }


    });

    let us = false;
    $('.Corporate-survey-form-item').click(function () {
        if (us == false) {
            let u = parseInt($(this).find('span').text());
            u = u + 1;
            $(this).find('span').html(u);
        }
        us = true;
    })


    var co = 0;
    $('.Close').click(function () {
        co++;

        $(this).toggleClass('active');
        if (co === 1) {
            $('.Matchs-league-button:not(.Matchs-league-button[aria-expanded="false"])').click();


        }
        if (co === 2) {

            $('.Matchs-league-button:not(.Matchs-league-button[aria-expanded="true"])').click();

            co = 0;
        }

    });


    var mco = 0;
    $('.mClose').click(function () {
        mco++;

        $(this).toggleClass('active');
        if (mco === 1) {

            $(this).parents(".Matchs-multiple-item ").find('.Matchs-market .Matchs-league-button:not(.Matchs-league-button[aria-expanded="false"])').click();


        }
        if (mco === 2) {

            $(this).parents(".Matchs-multiple-item ").find('.Matchs-market .Matchs-league-button:not(.Matchs-league-button[aria-expanded="true"])').click();

            mco = 0;
        }

    });



    var swiper2 = new Swiper('.Banks .swiper-container', {
        slidesPerView: "auto",
        speed: 1000,
        spaceBetween: 20,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {

            1280: {},
        }
    });


    var swiper3 = new Swiper(' .Home_content.six .swiper-container', {
        spaceBetween: 8,
        slidesPerView: 8,
        speed: 1000,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        breakpoints: {

            768: {
                slidesPerView: 2.2,
            },
            991: {
                slidesPerView: 4,
            },
        }

    });

    var swiper4 = new Swiper(' .Home_content.four .swiper-container', {
        spaceBetween: 20,
        slidesPerView: 4,
        speed: 1000,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        breakpoints: {

            768: {
                slidesPerView: 1.2,
            },
            991: {
                slidesPerView: 2,
            },
        }

    });

    var swiper5 = new Swiper(' .Home_content.five .casino-slider', {
        speed: 1000,
        loop: true,
        spaceBetween: 20,
        observer: true,
        observeParents: true,
        slidesPerView: 2.2,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        breakpoints: {

            768: {
                slidesPerView: 2.2,
            },
            991: {
                slidesPerView: 4,
            },
            3000:{
                slidesPerView:6,
            }
        }

    });
    var swiper5 = new Swiper(' .Home_content.five .slot-slider', {
        speed: 1000,
        loop: true,
        spaceBetween: 20,
        slidesPerView: 6,
        observer: true,
        observeParents: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        breakpoints: {

            768: {
                slidesPerView: 2.2,
            },
            991: {
                slidesPerView: 4,
            },
        }

    });
    var swiper5 = new Swiper(' .Home_content.five .other-slider', {
        speed: 1000,
        loop: true,
        spaceBetween: 20,
        slidesPerView: 6,
        observer: true,
        observeParents: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        breakpoints: {

            768: {
                slidesPerView: 2.2,
            },
            991: {
                slidesPerView: 4,
            },
        }

    });



    if ($(document).scrollTop() > 82) {

        $(".Navtop").addClass('active');
        $(".Bonus-filter").addClass('active');
    } else {
        $(".Navtop").removeClass('active');
        $(".Bonus-filter").removeClass('active');
    }


    $(window).scroll(function () {

        var w = $(window).width(), h = $(window).height();
        if ($(document).scrollTop() > 82) {

            $(".Navtop").addClass('active');
        } else {
            $(".Navtop").removeClass('active');
        }
    });

    $(".counter").on("click", function () {
        $(".Coupon-rate-odd-item").removeClass('active');

        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        $button.blur();
        if ($button.hasClass("inc")) {
            var newVal = parseFloat(oldValue) + 10;
        } else if ($button.hasClass("dec")) {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 10;
            } else {
                newVal = 0;
            }
        } else if ($button.hasClass("max")) {
            var max = $button.parent().parent().find(".Coupon-rate-calc-max-money").html();
            console.log(max)
            var newVal = max;

        }

        $button.parent().find("input").val(newVal + ".00");

    });


    $(".Coupon-rate-odd-item").on("click", function () {
        $(".Coupon-rate-odd-item").removeClass('active');

        var $button = $(this);
        var newVal = $button.text().trim();
            $button.addClass("active");


        $button.parent().parent().find("input").val(newVal);

    });




    $('.Bottom-button').on('click', function (e) {
        $('.Bottom-content').not($(this).parents(".Bottom-item").find('.Bottom-content')).removeClass('active');
        $(".Bottom-button").not($(this)).removeClass('active');
        $(this).parents(".Bottom-item").find('.Bottom-content-other').removeClass('active');
        $(this).parents(".Bottom-item").find('.Bottom-content-other-in').removeClass('active');
        $(this).parents(".Bottom-item").find('.Bottom-content').not('.Bottom-content-other,.Bottom-content-other-in').toggleClass('active');
        $(this).toggleClass('active');
        $('body').toggleClass('over');

        $(".notlogin").toggleClass('active');

    });

    $('.Bottom-button-other').on('click', function (e) {
        $('.Bottom-content').removeClass('active');
        $(this).parents(".Bottom-item").find('.Bottom-content-other').toggleClass('active');
    });

    $('.Bottom-button-other-close').on('click', function (e) {
        $(this).parents(".Bottom-item").find('.Bottom-content').toggleClass('active');
        $('.Bottom-content-other').removeClass('active');
        $('.Bottom-content-other-in').removeClass('active');

    });
    $('.Bottom-button-other-in-close').on('click', function (e) {
        $(this).parents(".Bottom-item").find('.Bottom-content-other').toggleClass('active');
        $('.Bottom-content-other-in').removeClass('active');

    });

    $('.Bottom-button-close').on('click', function (e) {
        $('.Bottom-content').removeClass('active');
        $('.Bottom-content-other').removeClass('active');
        $(".Bottom-button").removeClass('active');
        $('body').removeClass('over');
        $('.backdrop').removeClass('active');
        $('.Transaction').removeClass('active');
    });


    $('.Bottom-button-other-in').on('click', function (e) {
        $('.Bottom-content').removeClass('active');
        $('.Bottom-content-other').removeClass('active');
        $(this).parents(".Bottom-item").find('.Bottom-content-other-in').toggleClass('active');
    });






    $(document).click(function (e) {
        var target = e.target;

        if (!$(target).is('.Bottom-button') && !$(target).parents().is('.Bottom-button') && !$(target).parents().is('.Bottom-content') && !$(target).parents().is('.Navtop-account-funding')) {
            $('.Bottom-content').removeClass('active');
            $(".Bottom-button").removeClass('active');
            $('body').removeClass('over');
        }

    });


    $('#datetime24,#datetime24_2,#datetime24_3').combodate({
        firstItem: 'name', //show 'hour' and 'minute' string at first item of dropdown
        minuteStep: 1
    });

});












