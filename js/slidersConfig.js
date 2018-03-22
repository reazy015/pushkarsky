
$(document).ready(function (){
   $('.event-slider').slick({
       centerMode: true,
       arrows: false,
       dots: true,
       centerPadding: '18%',
       slidesToShow: 1,
       responsive: [
           {
               breakpoint: 1024,
               settings: {
                   centerPadding: '5%'
               }
           },
           {
               breakpoint: 568,
               settings: {
                   centerMode: false,
                   centerPadding: '0%'
               }
           }
       ]
   });
});

$(document).ready(function () {
   $('.rest-about-slider').slick({
       centerMode: true,
       arrows: false,
       dots: true,
       centerPadding: '18%',
       slidesToShow: 1,
       responsive: [
           {
               breakpoint: 1024,
               settings: {
                   centerPadding: '5%'
               }
           },
           {
               breakpoint: 568,
               settings: {
                   centerMode: false,
                   centerPadding: '0%'
               }
           }
       ]
   });
});