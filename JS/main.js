$(function () {
    $("#status").delay(2000).fadeOut(1000);
    $("#preloader").delay(3000).fadeOut(1000);

    $(window).scroll(function () {
        let showHeight = 200

        $(".title-cloud").each(function () {
            const titleTop = Math.round($(this).offset().top)
            if ($(window).scrollTop() >= (titleTop + showHeight) - $(window).height()) {
                $(this).stop().addClass("show")

            } else {
                $(this).stop().removeClass("show")
            }
            false
        })

        $(".banner .wrap-group").each(function () {
            const itemTop = Math.round($(this).offset().top)
            if ($(window).scrollTop() >= (itemTop + showHeight) - $(window).height()) {
                $(this).addClass("animate__animated animate__fadeInRight").css({ 'left': '0px' })
            } else {
                $(this).removeClass("animate__animated animate__fadeInRight").css({ 'left': '100%' })
            }
            false
        })

        $(".banner .wrap").each(function () {
            const wrapTop = Math.round($(this).offset().top)
            if ($(window).scrollTop() >= (wrapTop) - $(window).height()) {
                $(this).addClass("animate__animated animate__fadeInUp animate__faster").css({ 'opacity': '1' })
            } else {
                $(this).removeClass("animate__animated animate__fadeInUp animate__faster").css({ 'opacity': '0' })
            }
            false
        })


        $(".service .card:even img:nth-of-type(2)").each(function () {
            const cardTop = Math.round($(this).offset().top)
            if ($(window).scrollTop() >= (cardTop + showHeight) - $(window).height()) {
                $(this).addClass("move-right")
            } else {
                $(this).removeClass("move-right")
            }
            false
        })

        $(".service .card:odd img:nth-of-type(2)").each(function () {
            const cardTop = Math.round($(this).offset().top)
            if ($(window).scrollTop() >= (cardTop + showHeight) - $(window).height()) {
                $(this).addClass("move-left")

            } else {
                $(this).removeClass("move-left")
            }
            false
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
