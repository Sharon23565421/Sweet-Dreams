$(function () {
    $(window).scroll(function () {
        let showHeight = 200
        $(".favorable .card-group").each(function () {
            const cardTop = Math.round($(this).offset().top)
            if ($(window).scrollTop() >= (cardTop ) - $(window).height()) {
                $(this).addClass("animate__animated animate__fadeInUp")
            } else {
                $(this).removeClass("animate__animated animate__fadeInUp")
            }
            false
        })

        $(".trainer .wrap:first").each(function () {
            const cardTop = Math.round($(this).offset().top)
            if ($(window).scrollTop() >= (cardTop + showHeight) - $(window).height()) {
                $(this).addClass("animate__animated animate__fadeInLeft").css({'right': '0px'})
            } else {
                $(this).removeClass("animate__animated animate__fadeInLeft").css({'right': '100%'})
            }
            false
        })

        $(".trainer .wrap:nth-of-type(3)").each(function () {
            const cardTop = Math.round($(this).offset().top)
            if ($(window).scrollTop() >= (cardTop + showHeight) - $(window).height()) {
                $(this).addClass("animate__animated animate__fadeInRight").css({'left': '0px'})
            } else {
                $(this).removeClass("animate__animated animate__fadeInRight").css({'left': '100%'})
            }
            false
        })



    })
})