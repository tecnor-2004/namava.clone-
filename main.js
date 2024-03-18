// problems with center mode
//problems with these two interfiering 
// problems with transition when slick is used 
let navbar = $(".navbar")
let lastPosition = 0;
function scrollHandler(){
    let Position = window.scrollY;
    console.clear()
    console.log("position :"+Position)
    if(Position>=110){
        navbar
        .removeClass("position-absolute bg-transparent")
        .addClass("position-fixed bg-primary")
        .css({
            "transition":"all 0s",
            "top":"-120px"
        })
        if(Position > lastPosition && lastPosition <= Position){
            lastPosition = Position
            console.log("scrolling down")
            navbar.css({
                "box-shadow":"none",
                "top":"-120px",
                "transition":"all 1s"
            })
        }
        else{
            lastPosition = Position
            console.log("scrolling up")
            navbar.css({
                "box-shadow":" 0 10px 7px rgba(0, 0, 0, .3)",
                "top":"0px",
                "transition":"all 1s"
            })
        }
    }
    else if(Position == 0){
        navbar
        .removeClass("position-fixed bg-primary")
        .addClass("position-absolute bg-transparent")
        .css({
            "box-shadow":"inset 0px 50px 40px -20px rgb(0, 0, 0)",
            "top":"0px"
        })
    }
}
$(window).on("scroll", scrollHandler) 
$(function(){ 
    $('.slickCarousel').slick({
        slidesToShow: 3.1,
        slidesToScroll: 3,
        infinite: false,
        centerMode: false,
        // problems with center mode
        adaptiveHeight: true,
        nextArrow: $(".slick-next"),
        prevArrow: $(".slick-prev"),
        responsive:[
            {
                breakpoint:1413,
                settings:{
                    slidesToShow: 2.1,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint:700,
                settings:{
                    slidesToShow: 1.1,
                    slidesToScroll: 1
                }
            }
        ],
    })
});
$(function(){ 
    $('.slickCarouselLive').slick({
        slidesToShow: 3.1,
        slidesToScroll: 3,
        infinite: false,
        centerMode: false,
        // problems with center mode
        adaptiveHeight: true,
        nextArrow: $(".live-next"),
        prevArrow: $(".live-prev"),
        responsive:[
            {
                breakpoint:1413,
                settings:{
                    slidesToShow: 2.1,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint:700,
                settings:{
                    slidesToShow: 1.1,
                    slidesToScroll: 1
                }
            }
        ],
    })
});
$(function(){ 
    $('.slickCarouselMovies').slick({
        slidesToShow: 7.1,
        slidesToScroll: 7,
        infinite: false,
        centerMode: false,
        adaptiveHeight: true,
        nextArrow: $(".movies-next"),
        prevArrow: $(".movies-prev"),
        responsive:[
            {
                breakpoint:1413,
                settings:{
                    slidesToShow: 4.1,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint:700,
                settings:{
                    slidesToShow: 3.1,
                    slidesToScroll: 3
                }
            }
        ],
    })
});
$(function(){ 
    $('.slickCarouselMovies-2').slick({
        slidesToShow: 7.1,
        slidesToScroll: 7,
        infinite: false,
        centerMode: false,
        adaptiveHeight: true,
        nextArrow: $(".movies-next-2"),
        prevArrow: $(".movies-prev-2"),
        responsive:[
            {
                breakpoint:1413,
                settings:{
                    slidesToShow: 4.1,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint:700,
                settings:{
                    slidesToShow: 3.1,
                    slidesToScroll: 3
                }
            }
        ],
    })
});