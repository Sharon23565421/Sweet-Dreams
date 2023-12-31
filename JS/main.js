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

    start();
    window.onresize = start;
    function start() {
        if (jQuery(window).width() <= 768) {
            $(".card-group .wrap").addClass("owl-carousel owl-theme")
            var owl = $('.owl-carousel');
            owl.owlCarousel({
                items: 2,
                loop: true,
                margin: 10,
                autoplay: true,
                stopOnHover: true,
                autoplayTimeout: 8000,
                responsiveRefreshRate: 0,
                responsive: {
                    0: {
                        items: 1,
                    },
                    768: {
                        items: 2,
                    }
                }
            });
        } else if (jQuery(window).width() > 768) {
            $(".album .container").removeClass("owl-carousel owl-theme")
        }
    }
})
