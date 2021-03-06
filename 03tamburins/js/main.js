$(function () {

    $('.main_slider').on('init afterChange', function (e, s, c) {
        var current = $('.slick-current');
        current.addClass('on').siblings().removeClass('on');
        $('.slide_num').text((c ? (c + 1) : 1) + " / " + s.slideCount);


        $('.main_arrow').removeClass('on');
        if (c === 0) {
            $('.main_arrow').addClass('on')
        }
        $(".pro-bar").addClass('on');
    });
    $('.main_slider').on('beforeChange', function () {
        $('.pro-bar').removeClass('on');
    });

    $('.main_slider').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        fade: true,
    });

    $('.product_slider').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        slidesToShow: 4
        ,
        centerMode: true,
    });


    $('.main_arrow .prev').on('click', function () {
        $('.main_slider').slick('slickPrev');
    });

    $('.main_arrow .next').on('click', function () {
        $('.main_slider').slick('slickNext');
    });

    $('.toTop').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 200)
    });

    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();
        if (sct > 500) {
            $('.toTop').fadeIn(300)
        } else {
            $('.toTop').fadeOut(1000)
        }
    });
});