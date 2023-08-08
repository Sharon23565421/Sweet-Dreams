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


    $(".navbar-img").delay(1000).animate({
        top: "0px",
        opacity:1,
    }, 500, 'easeOutBack')


})

