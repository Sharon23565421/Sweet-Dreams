$(function(){
    $(".find-pets .text,.find-pets>img").click(function () {
        $(this).siblings(".about-products").css({ "opacity": "1", "visibility": "visible" }).removeClass("animate__animated animate__fadeOut animate__faster").addClass("animate__animated animate__fadeIn animate__faster");
    });

    $(".about-products .x-btn,.about-products").click(function (event) {
        event.stopPropagation(); 
        $(this).closest(".about-products").css({ "opacity": "0", "visibility": "hidden" }).removeClass("animate__animated animate__fadeIn animate__faster").addClass("animate__animated animate__fadeOut animate__faster");
    });
})