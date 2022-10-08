jQuery(document).ready(function (){

    //  SHRINK MENU
   
    /*
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 50) {
            $("nav").addClass("shrunk");
            $("body").addClass("scroll");
        } else {
            $("nav").removeClass("shrunk");
            $("body").removeClass("scroll");
        }
    });
    */

    //alert("ok");

    // HAMBURGER MENU
   /* $(".hamburger_button").click(function() {    
            $(this).hide();
            $(".hamburger_button_close").show();
            $("body").addClass("fixed");
            $("html").addClass("fixedhtml");
            $("nav").addClass("open");
    });    
    $(".hamburger_button_close").click(function() {    
            $(this).hide();
            $(".hamburger_button").show();
            $("body").removeClass("fixed");
            $("html").removeClass("fixedhtml");
            $("nav").removeClass("open");
    });
     */
     // ALSO CLOSE NAV MENU WHEN ANY LINK (HOME) ETC IS CLCIKED
    /*
     $("nav ul li a").click(function() {
        $("nav").removeClass("open");
        $("body").removeClass("fixed");
        $(".hamburger_button_close").hide();
        $(".hamburger_button").show();
     });
     */


});

