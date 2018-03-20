
$(document).ready(function (){
   $('.event-slider').slick({
        centerMode: true,
        dots: true,
        arrows: false,
        centerPadding: '400px',
        slideToShow: 1,
        responsive: [
            {
                breakpoint: 568,
                settings: {
                    centerMode: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    centerPadding: '175px',
                    slideToShow: 1
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
       centerPadding: '260px',
       slidesToShow: 1,
       responsive: [
           {
               breakpoint: 768,
               settings: {
                   arrows: false,
                   centerMode: true,
                   centerPadding: '40px',
                   slidesToShow: 1
               }
           },
           {
               breakpoint: 480,
               settings: {
                   arrows: false,
                   centerMode: false,
                   centerPadding: '40px',
                   slidesToShow: 1
               }
           }
       ]
   })
});