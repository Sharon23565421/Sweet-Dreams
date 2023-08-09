$(function () {
    $(window).scroll(function () {
        $(".problem .container .text:even").each(function () {
            const cardTop = Math.round($(this).offset().top)
            if ($(window).scrollTop() >= cardTop - $(window).height() && $(window).scrollTop() <= cardTop + $(window).height() / 2) {
                $(this).addClass("animate__animated animate__fadeInRight")
            } else {
                $(this).removeClass("animate__animated animate__fadeInRight")
            }
        })

        $(".problem .container .text:odd").each(function () {
            const cardTop = Math.round($(this).offset().top)
            if ($(window).scrollTop() >= cardTop - $(window).height() && $(window).scrollTop() <= cardTop + $(window).height() / 2) {
                $(this).addClass("animate__animated animate__fadeInLeft")
            } else {
                $(this).removeClass("animate__animated animate__fadeInLeft")
            }
        })

        $(".about .container").each(function () {
            const top = $(this).offset().top;
            if ($(window).scrollTop() >= top - $(window).height() && $(window).scrollTop() <= top + $(window).height() / 2) {
                $(this).addClass("animate__animated animate__fadeInLeft")
            } else {
                $(this).removeClass("animate__animated animate__fadeInLeft")
            }
        })

        $(".class .card .more-btn").on("click", function () {
            const card = $(this).closest(".card");
            card.removeClass("animate__animated animate__zoomIn"); 
        });

        $(".class .card").each(function () {
            const top = $(this).offset().top;
            if ($(window).scrollTop() >= top - $(window).height() && $(window).scrollTop() <= top + $(window).height() / 2) {
                $(this).addClass("animate__animated animate__zoomIn")
            } else {
                $(this).removeClass("animate__animated animate__zoomIn")
            }
        })
    })
})