$(document).ready(function () {
    // 圖片lozad
    const observer = lozad('.lozad', {
        rootMargin: "150px 0px"
    });
    observer.observe();
    //navbar menu 收合
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').removeClass('show');
        $('.navbar-toggler').addClass('collapsed');
        $('.navbar-light .navbar-toggler ').attr("aria-expanded","false");
    });
    //navbar menu動態
    $('.navbar-nav>li>a[href="#"],.logo-router>h1>a').on('click', function () {
        $('html,body').animate({
            scrollTop: 0,
         }, 500);
    });
    $('.navbar-nav>li>a[href="#worry"]').on('click', function () {
        $('html,body').animate({
            scrollTop: $('#worry').offset().top,
         }, 500);
    });
    $('.navbar-nav>li>a[href="#approach"]').on('click', function () {
        $('html,body').animate({
            scrollTop: $('#approach').offset().top,
         }, 500);
    });
    $('.navbar-nav>li>a[href="#recommend"]').on('click', function () {
        $('html,body').animate({
            scrollTop: $('#recommend').offset().top,
         }, 500);
    });
    $('.navbar-nav>li>a[href="#question"]').on('click', function () {
        $('html,body').animate({
            scrollTop: $('#question').offset().top,
         }, 500);
    });
    $('a[href="#lp_form"]').on('click', function () {
        $('html,body').animate({
            scrollTop: $('#lp_form').offset().top,
         }, 500);
    });
    // 立即訂購btn動態
    $('.buybtn').click(function (e) { 
        e.preventDefault();
        $('html , body').animate({
            scrollTop: $('#buy').offset().top,
        },900);
    });
});

