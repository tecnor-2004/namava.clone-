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
            "box-shadow":"inset 0px 30px 10px -20px rgb(0, 0, 0)",
            "top":"0px"
        })
    }
}
$(window).on("scroll", scrollHandler)
  

