$(function () {
    $(window).scroll(function () {
        $(".favorable .card").each(function () {
            const cardTop = Math.round($(this).offset().top)
            if ($(window).scrollTop() >= cardTop - $(window).height() && $(window).scrollTop() <= cardTop + $(window).height() / 3) {
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


    })
})