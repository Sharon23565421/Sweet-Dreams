$(function () {
    $("#status").delay(2000).fadeOut(1000);
    $("#preloader").delay(3000).fadeOut(1000);
    $(window).scroll(function () {
        $(".title-cloud").each(function () {
            const titleTop = Math.round($(this).offset().top)
            if ($(window).scrollTop() >= titleTop - $(window).height() && $(window).scrollTop() <= titleTop + $(window).height() / 2) {
                $(this).stop().addClass("show")

            } else {
                $(this).stop().removeClass("show")
            }
        })

        $(".banner .img:first").each(function () {
            const imgTop = Math.round($(this).offset().top)
            if ($(window).scrollTop() >= imgTop - $(window).height() && $(window).scrollTop() <= imgTop + $(window).height() / 2) {
                $(this).addClass("animate__animated animate__fadeInRight")
            } else {
                $(this).removeClass("animate__animated animate__fadeInRight")
            }

        })

        $(".banner .container .item").each(function () {
            const itemTop = Math.round($(this).offset().top)
            if ($(window).scrollTop() >= itemTop - $(window).height() && $(window).scrollTop() <= itemTop + $(window).height() / 2) {
                $(this).addClass("animate__animated animate__fadeInRight")
            } else {
                $(this).removeClass("animate__animated animate__fadeInRight")
            }

        })


        $(".banner .wrap").each(function () {
            const wrapTop = Math.round($(this).offset().top)
            if ($(window).scrollTop() >= wrapTop - $(window).height() && $(window).scrollTop() <= wrapTop + $(window).height() / 2) {
                $(this).stop().animate({
                    opacity: 1,
                    top: 0,
                }, 300, 'easeOutBack')

            } else {
                $(this).stop().animate({
                    opacity: .3,
                    top: '15%',
                }, 300, 'easeOutBack')
            }

        })


        $(".service .card:even").each(function () {
            const cardTop = Math.round($(this).offset().top)
            if ($(window).scrollTop() >= cardTop - $(window).height() && $(window).scrollTop() <= cardTop + $(window).height() / 2) {
                $(this).addClass("animate__animated animate__fadeInLeft")
            } else {
                $(this).removeClass("animate__animated animate__fadeInLeft")
            }
        })

        $(".service .card:odd").each(function () {
            const cardTop = Math.round($(this).offset().top)
            if ($(window).scrollTop() >= cardTop - $(window).height() && $(window).scrollTop() <= cardTop + $(window).height() / 2) {
                $(this).addClass("animate__animated animate__fadeInRight")

            } else {
                $(this).removeClass("animate__animated animate__fadeInRight")

            }
        })
    })










    $(".img-givemefive").delay(3000).animate({
        left: "0px",
        opacity: 1,
    }, 500, 'easeOutBack')

    $(".cat").delay(3300).animate({
        top: "-60%",
        opacity: 1,
    }, 500, 'easeOutBack')


})
