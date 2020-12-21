$(document).ready(function(){
    $("#menu-btn").click(function(){
        $(".navigation ul").toggleClass("open");
    });
    $('.slides').slick({
        arrows:false,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay:true
    });
});
