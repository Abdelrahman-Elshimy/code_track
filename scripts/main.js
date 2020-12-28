$(document).ready(function(){

    $header = $('header');
    $sticky = $header.before($header.clone().addClass('sticky'));

    $(window).on("scroll", function(){
        $scrollTop = $(window).scrollTop();
        $("body").toggleClass('scroll', ($scrollTop > $(window).height()));
    });
});