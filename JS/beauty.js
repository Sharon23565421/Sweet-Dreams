$(function () {
    $(window).scroll(function () {
        let showHeight = 200
        $(".notice .card").each(function () {
            const top = $(this).offset().top;
            if ($(window).scrollTop() >= (top) - $(window).height()) {
                $(this).addClass("animate__animated animate__fadeInUp animate__faster")
            } else {
                $(this).removeClass("animate__animated animate__fadeInUp animate__faster")
            }
            false
        })
    })



})