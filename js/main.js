$(document).ready(function () {
    $(".mobile-btn").click(function(){
        $(".mobile-btn").toggleClass('active');
        $(".header-ul").toggleClass('active');
    // $("body").toggleClass('owerlay');
    $(".header-menu").toggleClass('bg-gray');
    })
    AOS.init();
});