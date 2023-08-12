$(function(){
    $(window).scroll(function(){
        let showHeight = 200
        $(".new-adopt .card").each(function () {
            const top = $(this).offset().top;
            if ($(window).scrollTop() >= (top) - $(window).height()) {
                $(this).addClass("animate__animated animate__fadeInUp animate__faster")
            } else {
                $(this).removeClass("animate__animated animate__fadeInUp animate__faster")
            }
            false
        })

        $(".before-adopt .card:nth-child(1)").each(function () {
            const cardTop = Math.round($(this).offset().top)
            if ($(window).scrollTop() >= (cardTop + showHeight) - $(window).height()) {
                $(this).addClass("animate__animated animate__fadeInLeft").css({'right' : '0'})
            } else {
                $(this).removeClass("animate__animated animate__fadeInLeft").css({'right' : '100%'})
            }
            false
        })

        $(".before-adopt .card:nth-child(5)").each(function () {
            const cardTop = Math.round($(this).offset().top)
            if ($(window).scrollTop() >= (cardTop + showHeight) - $(window).height()) {
                $(this).addClass("animate__animated animate__fadeInLeft").css({'right' : '0'})
            } else {
                $(this).removeClass("animate__animated animate__fadeInLeft").css({'right' : '100%'})
            }
            false
        })

        $(".before-adopt .card:nth-child(3)").each(function () {
            const cardTop = Math.round($(this).offset().top)
            if ($(window).scrollTop() >= (cardTop + showHeight) - $(window).height()) {
                $(this).addClass("animate__animated animate__fadeInRight").css({'left': '0px'})
            } else {
                $(this).removeClass("animate__animated animate__fadeInRight").css({'left': '100%'})
            }
            false
        })

        $(".search .card").each(function () {
            const top = $(this).offset().top;
            if ($(window).scrollTop() >= (top ) - $(window).height()) {
                $(this).addClass("animate__animated animate__fadeInUp animate__faster")
            } else {
                $(this).removeClass("animate__animated animate__fadeInUp animate__faster")
            }
            false
        })



    })
})