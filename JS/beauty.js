$(function () {
    $(window).scroll(function () {
        $(".about-beauty .container").each(function () {
            const cardTop = Math.round($(this).offset().top)
            if ($(window).scrollTop() >= cardTop - $(window).height() && $(window).scrollTop() <= cardTop + $(window).height() / 3) {
                $(this).addClass("animate__animated animate__fadeInLeft")
            } else {
                $(this).removeClass("animate__animated animate__fadeInLeft")
            }
        })
      
        $(".notice .card").each(function () {
            const top = $(this).offset().top;
            if ($(window).scrollTop() >= top - $(window).height() && $(window).scrollTop() <= top + $(window).height() / 2) {
                $(this).addClass("animate__animated animate__zoomIn")
            } else {
                $(this).removeClass("animate__animated animate__zoomIn")
            }
        })

      



        $(".price .list").each(function () {
            const top = $(this).offset().top;
            if ($(window).scrollTop() >= top - $(window).height() && $(window).scrollTop() <= top + $(window).height() / 2) {
                $(this).addClass("animate__animated animate__bounceIn")
            } else {
                $(this).removeClass("animate__animated animate__bounceIn")
            }
        })


    })



})