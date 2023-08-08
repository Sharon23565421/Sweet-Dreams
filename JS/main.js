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
                    left: "0",
                }, 200, 'easeOutBack')

            } else {
                $(this).stop().animate({
                    opacity: .3,
                    left: "-10%",
                }, 200, 'easeOutBack')
            }

        })

        $(".banner .container .item").each(function () {
            const itemTop = Math.round($(this).offset().top)
            if ($(window).scrollTop() >= itemTop - $(window).height() && $(window).scrollTop() <= itemTop + $(window).height() / 2) {
                $(this).stop().animate({
                    opacity: 1,
                    left: "0",
                }, 200, 'easeOutBack')

            } else {
                $(this).stop().animate({
                    opacity: .3,
                    left: "-10%",
                }, 200, 'easeOutBack')
            }

        })


        $(".banner .wrap").each(function () {
            const wrapTop = Math.round($(this).offset().top)
            if ($(window).scrollTop() >= wrapTop - $(window).height() && $(window).scrollTop() <= wrapTop + $(window).height() / 2) {
                $(this).stop().animate({
                    opacity: 1,
                    top: 0,
                }, 200, 'easeOutBack')

            } else {
                $(this).stop().animate({
                    opacity: .3,
                    top: '10%',
                }, 200, 'easeOutBack')
            }

        })


        $(".service .card:even").each(function () {
            const cardTop = Math.round($(this).offset().top)
            if ($(window).scrollTop() >= cardTop - $(window).height() && $(window).scrollTop() <= cardTop + $(window).height() / 2) {
                $(this).stop().animate({
                    opacity: 1,
                    right: 0,
                }, 200, 'easeOutBack' )
            } else {
                $(this).stop().animate({
                    opacity: .3,
                    right: '-15%'
                }, 200, 'easeOutBack' )
            }
        })

        $(".service .card:odd").each(function () {
            const cardTop = Math.round($(this).offset().top)
            if ($(window).scrollTop() >= cardTop - $(window).height() && $(window).scrollTop() <= cardTop + $(window).height() / 2) {
                $(this).stop().animate({
                    opacity: 1,
                    left: 0,
                }, 200, 'easeOutBack' )
            } else {
                $(this).stop().animate({
                    opacity: .3,
                    left: '-20%'
                }, 200, 'easeOutBack')
            }
        })
})










        $(".img-givemefive").delay(3000).animate({
            left: "0px",
            opacity:1,
        }, 500, 'easeOutBack')

        $(".cat").delay(3300).animate({
            top: "-60%",
            opacity:1,
        }, 500, 'easeOutBack')

        $(".navbar-img").delay(3500).animate({
            top: "0%",
            opacity:1,
        }, 500, 'easeOutBack')
    
})
