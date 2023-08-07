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
                $(this).stop().animate({
                    opacity: 1,
                },300)

            } else {
                $(this).stop().animate({
                    opacity: .3,
                },300)
            }

        })

        $(".banner .container .item").each(function () {
            const itemTop = Math.round($(this).offset().top)
            if ($(window).scrollTop() >= itemTop - $(window).height()  && $(window).scrollTop() <= itemTop + $(window).height() / 2)  {
                $(this).stop().animate({
                    opacity: 1,
                },300)

            } else {
                $(this).stop().animate({
                    opacity: .3,
                },300)
            }


        })


        $(".banner .wrap").each(function () {
            const wrapTop = Math.round($(this).offset().top)
            if ($(window).scrollTop() >= wrapTop - $(window).height() && $(window).scrollTop() <= wrapTop + $(window).height() / 2) {
                $(this).stop().animate({
                    opacity: 1,
                },300)

            } else {
                $(this).stop().animate({
                    opacity: .3,
                },300)
            }

        })


        $(".service .card").each(function () {
            const cardTop = Math.round($(this).offset().top)
            if ($(window).scrollTop() >= cardTop - $(window).height() && $(window).scrollTop() <= cardTop + $(window).height() / 2) {
                $(this).stop().animate({
                    opacity: 1,
                },300)

            } else {
                $(this).stop().animate({
                    opacity: .3,
                },300)
            }

        })


    })


    $(".img-givemefive").delay(3000).animate({
        left: "0px",
    }, 500, 'easeOutBack')

    $(".cat").delay(3300).animate({
        top: "-60%",
    }, 500, 'easeOutBack')

    $(".navbar-img").delay(3500).animate({
        top: "0px",
    }, 500, 'easeOutBack')

})
