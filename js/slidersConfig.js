
$(document).ready(function (){
   $('.event-slider').slick({
       mobileFirst: true,
       centerMode: false,
       arrows: false,
       dots: true,
       slidesToShow: 1,
       responsive: [
           {
               breakpoint: 1024,
               settings: {
                   centerMode: true,
                   centerPadding: '18%'
               }
           }
       ]
   });
});

$(document).ready(function () {
   $('.rest-about-slider').slick({
       mobileFirst: true,
       centerMode: false,
       arrows: false,
       dots: true,
       slidesToShow: 1,
       responsive: [
           {
               breakpoint: 1024,
               settings: {
                   centerMode: true,
                   centerPadding: '18%'
               }
           }
       ]
   });
});