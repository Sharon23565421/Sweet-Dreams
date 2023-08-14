$(function () {
    $(window).scroll(function () {
        let showHeight = 200

        $(".about-class .card:even").each(function () {
            const cardTop = Math.round($(this).offset().top)
            if ($(window).scrollTop() >= (cardTop + showHeight) - $(window).height()) {
                $(this).addClass("animate__animated animate__fadeInRight").css({'left': '0px'})
            } else {
                $(this).removeClass("animate__animated animate__fadeInRight").css({'left': '100%'})
            }
            false
        })

        $(".about-class .card:odd").each(function () {
            const cardTop = Math.round($(this).offset().top)
            if ($(window).scrollTop() >= (cardTop + showHeight) - $(window).height()) {
                $(this).addClass("animate__animated animate__fadeInLeft").css({'right': '0px'})
            } else {
                $(this).removeClass("animate__animated animate__fadeInLeft").css({'right': '100%'})
            }
            false
        })

    })
    start();
    window.onresize = start;
    function start() {
        if (jQuery(window).width() <= 768) {
            $(".album .container").addClass("owl-carousel owl-theme")
            var owl = $('.owl-carousel');
            owl.owlCarousel({
                stagePadding: 50,
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
        } else if(jQuery(window).width() > 768) {
            $(".album .container").removeClass("owl-carousel owl-theme")
        }


    }



})