$(function () {
    $(window).scroll(function () {
        let showHeight = 200

        $(".problem .container .text:even").each(function () {
            const cardTop = Math.round($(this).offset().top)
            if ($(window).scrollTop() >= (cardTop + showHeight) - $(window).height()) {
                $(this).addClass("animate__animated animate__fadeInRight")
            } else {
                $(this).removeClass("animate__animated animate__fadeInRight")
            }
        })

        $(".problem .container .text:odd").each(function () {
            const cardTop = Math.round($(this).offset().top)
            if ($(window).scrollTop() >= (cardTop + showHeight) - $(window).height()) {
                $(this).addClass("animate__animated animate__fadeInLeft")
            } else {
                $(this).removeClass("animate__animated animate__fadeInLeft")
            }
        })

        $(".class .card .more-btn").on("click", function () {
            const card = $(this).closest(".card");
            card.removeClass("animate__animated animate__zoomIn"); 
        });

    })
})