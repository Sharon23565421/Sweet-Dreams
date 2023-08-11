$(function () {
    $(window).scroll(function () {
        let showHeight = 200
        $(".about-beauty .container").each(function () {
            const cardTop = Math.round($(this).offset().top)
            if ($(window).scrollTop() >= (cardTop + showHeight) - $(window).height()) {
                $(this).addClass("animate__animated animate__fadeInLeft").css({'right': '0px'})
            } else {
                $(this).removeClass("animate__animated animate__fadeInLeft").css({'right': '100%'})
            }
            false
        })
      
        $(".notice .card").each(function () {
            const top = $(this).offset().top;
            if ($(window).scrollTop() >= (top + showHeight) - $(window).height()) {
                $(this).addClass("animate__animated animate__fadeInUp")
            } else {
                $(this).removeClass("animate__animated animate__fadeInUp")
            }
            false
        })

      



        $(".price .list").each(function () {
            const top = $(this).offset().top;
            if ($(window).scrollTop() >= (top + showHeight) - $(window).height()) {
                $(this).addClass("animate__animated animate__bounceIn")
            } else {
                $(this).removeClass("animate__animated animate__bounceIn")
            }
            false
        })


    })



})