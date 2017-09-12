  
  
 //Owl Carousel Initialization 
  var owl = $('.owl-carousel').owlCarousel({
    loop:true,
    center: true, 
    items: 1,
    smartSpeed: 1000,
    autoplay: true,
    dots: true

});



//for counter-up Plugin initialization 
$('.counter').counterUp({
	delay: 10,
	time: 1000
});	
                
                
new WOW().init(); //for wow Plugin initialization 



//Scroll Speed Controller
//if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
//window.onmousewheel = document.onmousewheel = wheel;
//
//function wheel(event) {
//    var delta = 0;
//    if (event.wheelDelta) delta = event.wheelDelta / 120;
//    else if (event.detail) delta = -event.detail / 3;
//
//    handle(delta);
//    if (event.preventDefault) event.preventDefault();
//    event.returnValue = false;
//}
//
//function handle(delta) {
//    var time = 250;
//    var distance = 300;
//    
//    $('html, body').stop().animate({
//        scrollTop: $(window).scrollTop() - (distance * delta)
//    }, time );
//} 




//Scroll to target div function

$('.bottom-line a,.bottom-line-footer a').click(function(){
    var getAttr = $(this).attr('data-id');
    var scrollTo = $(getAttr).offset();
    
    $("html, body").animate({
        scrollTop :scrollTo.top
    }, 1000);
    return false;
});