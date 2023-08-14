$(function () {        
        $(".pic img, .pic .text").click(function () {
            $(this).siblings(".about-products").css({ "opacity": "1", "visibility": "visible" }).removeClass("animate__animated animate__fadeOut animate__faster").addClass("animate__animated animate__fadeIn animate__faster")
        });
    
        $(".about-products").click(function () {
            $(this).css({ "opacity": "0", "visibility": "hidden" }).removeClass("animate__animated animate__fadeIn animate__faster").addClass("animate__animated animate__fadeOut animate__faster")
        });



})