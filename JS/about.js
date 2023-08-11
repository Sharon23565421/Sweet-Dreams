$(function () {
    $(window).scroll(function () {
        let showHeight = 200

        $(".about-us .container").each(function () {
            const top = $(this).offset().top;
            if ($(window).scrollTop() >= (top + showHeight) - $(window).height()) {
                $(this).addClass("animate__animated animate__fadeInLeft")
            } else {
                $(this).removeClass("animate__animated animate__fadeInLeft")
            }
            false
        })

        $(".banner .container").each(function () {
            const cardTop = Math.round($(this).offset().top)
            if ($(window).scrollTop() >= (cardTop + showHeight) - $(window).height()) {
                $(this).addClass("animate__animated animate__zoomIn").css({'opacity': '1'})
            } else {
                $(this).removeClass("animate__animated animate__zoomIn").css({'opacity': '0'})
            }
            false
        })

        $(".about-class .card:even").each(function () {
            const cardTop = Math.round($(this).offset().top)
            if ($(window).scrollTop() >= (cardTop + showHeight) - $(window).height()) {
                $(this).addClass("animate__animated animate__fadeInRight").css({'left': '0px'})
            } else {
                $(this).removeClass("animate__animated animate__fadeInRight").css({'left': '100%'})
            }
            false
        })

        $(".about-class .card:odd").each(function () {
            const cardTop = Math.round($(this).offset().top)
            if ($(window).scrollTop() >= (cardTop + showHeight) - $(window).height()) {
                $(this).addClass("animate__animated animate__fadeInLeft").css({'right': '0px'})
            } else {
                $(this).removeClass("animate__animated animate__fadeInLeft").css({'right': '100%'})
            }
            false
        })

    })

})