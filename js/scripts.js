$(document).ready(function () {
    var mySwiper = new Swiper('.swiper-container', {

        loop: true,
        // pagination: {
        //     el: '.swiper-pagination',
        //     type: 'fraction',
        // },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });

    $(".dropbtn").click(function () {

        $(this).parent().siblings().children('.dropdown-content').slideUp();
        $(this).siblings(".dropdown-content").slideToggle();
    });
    $(window).resize(function () {
        if ($(this).width() < 768) {
            $('.dropdown-content').slideUp();
        }
    });

});