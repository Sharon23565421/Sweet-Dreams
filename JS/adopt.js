$(function(){
    $(window).scroll(function(){
        let showHeight = 200
        $(".new-adopt .container").each(function () {
            const top = $(this).offset().top;
            if ($(window).scrollTop() >= (top) - $(window).height()) {
                $(this).addClass("animate__animated animate__fadeInUp")
            } else {
                $(this).removeClass("animate__animated animate__fadeInUp")
            }
            false
        })

        $(".before-adopt .card:nth-child(odd)").each(function () {
            const cardTop = Math.round($(this).offset().top)
            if ($(window).scrollTop() >= (cardTop + showHeight) - $(window).height()) {
                $(this).addClass("animate__animated animate__fadeInLeft").css({'right' : '0'})
            } else {
                $(this).removeClass("animate__animated animate__fadeInLeft").css({'right' : '100%'})
            }
            false
        })




    })
})