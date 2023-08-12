$(function(){
    $(".trainer-btn a").click(function () {
        const target = $(this).attr("href");
        const position = $(target).offset().top;
        $("html,body").animate({
            scrollTop : position,
        }, 500,"easeOutQuart")
    })

    $(window).scroll(function(){
        let showHeight = 200

        $(".trainer .jason .introduce,.trainer .sharon .introduce,.trainer .ken .introduce").each(function () {
            const top = $(this).offset().top;
            if ($(window).scrollTop() >= (top + showHeight) - $(window).height()) {
                $(this).addClass("animate__animated animate__fadeInLeft")
            } else {
                $(this).removeClass("animate__animated animate__fadeInLeft")
            }
            false
        })

        $(".trainer .hover .introduce , .trainer .melly .introduce").each(function () {
            const cardTop = Math.round($(this).offset().top)
            if ($(window).scrollTop() >= (cardTop + showHeight) - $(window).height()) {
                $(this).addClass("animate__animated animate__fadeInRight").css({'left': '0px'})
            } else {
                $(this).removeClass("animate__animated animate__fadeInRight").css({'left': '100%'})
            }
            false
        })


    })
})