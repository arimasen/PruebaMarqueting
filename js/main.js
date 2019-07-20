$(function(){
    init();
});

let init = function () {
    createGrid();
    interactions();

    var headCar = $("#head_car");
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        //autoplaySpeed: 2000,
        //autoplayTimeout: 2000,
        //autoplayHoverPause: true,
        dots: false,
        nav: true,
        onInitialize: (function(){
            console.log("Initialized OWL HEAD");
        })
    });
}

let createGrid = function(){
     for (let i = 0; i<20; i++){
        let e = document.createElement("div");
        e.classList.add( "col-4","col-lg-3");
        let b = document.createElement("div");
        b.classList.add( randomClass(),"gridblock" );
        b.setAttribute("data-toggle","modal");
        b.setAttribute("data-target","#myModal");
        e.append(b);
        $("#grid > .row").eq(0).append(e);
     }
};

let interactions = function(){
    $(".gridblock").hover(function(){
        let thisClass = ( $(this).hasClass("bg1") ) ? "bg1" : "bg2" ;
        $( "." + thisClass ).toggleClass("bg_active");
    });
    
    $("#mob_menu").on("click", function(){
        $(".navbar").toggleClass("open");
        $(".dropdown").removeClass("open");
    });
;}


let randomClass = function(){
    let cl = "bg1";
    let rnd = Math.random();
    rnd = Math.round(rnd);
    if(rnd){ cl = "bg2"; }
    return cl;
}

