$(function () {
    $("header .goback-btn").click(function () {
        // console.log(this);
        const target = $(this).attr("href");
        // console.log(target);
        const position = $(target).offset().top;
        // console.log(position);
        $("html,body").animate({
            scrollTop: position
        }, 500,"easeOutQuart")
    })

    $("header .goback-btn").mouseenter(function(){
        $(this).addClass("animate__animated animate__jello")
    }).mouseleave(function(){
        $(this).removeClass("animate__animated animate__jello")
    })

    $(".navbar-img").mouseenter(function(){
        $(this).addClass("animate__animated animate__jello")
    }).mouseleave(function(){
        $(this).removeClass("animate__animated animate__jello")
    })

    $(".roll-btn .btn").click(function () {
        const target = $(this).attr("href");
        const position = $(target).offset().top;
        $("html,body").animate({
            scrollTop : position,
        }, 500,"easeOutQuart")
    })



    $("header #waveHeader").delay(500).animate({
        top: "0px",
    }, 500, 'easeOutBounce')

    $(".header .wrap a img").delay(500).animate({
        top: "25px",
    }, 500, 'easeOutBounce')
    
    $(".navbar-img").delay(800).animate({
        top: "0px",
    }, 500, 'easeOutBounce')

    $(".header .img img").addClass("animate__animated animate__zoomIn")

})

