$(function () {
    $(window).scroll(function () {
        $(".about-us .container").each(function () {
            const top = $(this).offset().top;
            if ($(window).scrollTop() >= top - $(window).height() && $(window).scrollTop() <= top + $(window).height() / 2) {
                $(this).addClass("animate__animated animate__fadeInLeft")
            } else {
                $(this).removeClass("animate__animated animate__fadeInLeft")
            }
        })

        $(".banner .container").each(function () {
            const cardTop = Math.round($(this).offset().top)
            if ($(window).scrollTop() >= cardTop - $(window).height() && $(window).scrollTop() <= cardTop + $(window).height() / 2) {
                $(this).addClass("animate__animated animate__zoomIn")
            } else {
                $(this).removeClass("animate__animated animate__zoomIn")
            }
        })

        $(".about-class .card:even").each(function () {
            const cardTop = Math.round($(this).offset().top)
            if ($(window).scrollTop() >= cardTop - $(window).height() && $(window).scrollTop() <= cardTop + $(window).height() / 2) {
                $(this).addClass("animate__animated animate__fadeInRight")
            } else {
                $(this).removeClass("animate__animated animate__fadeInRight")
            }
        })

        $(".about-class .card:odd").each(function () {
            const cardTop = Math.round($(this).offset().top)
            if ($(window).scrollTop() >= cardTop - $(window).height() && $(window).scrollTop() <= cardTop + $(window).height() / 2) {
                $(this).addClass("animate__animated animate__fadeInLeft")
            } else {
                $(this).removeClass("animate__animated animate__fadeInLeft")
            }
        })

    })

})