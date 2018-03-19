
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