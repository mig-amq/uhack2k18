$(document).ready(function () {
    var loginBack = $("#login-back, #sign-back");
    var landingBG = $("#landing #bg-img");
    
    loginBack.click(function (e) {
        if (e.currentTarget.id === "login-back") {
            landingBG.addClass("login");
            landingBG.children(".signup").addClass("login");
            landingBG.addClass("login");
            $("#login").animate({opacity: 0}, 25);
            $("#signup").delay(400).animate({opacity: 1}, 100);
            
            $("#login").css("z-index", -1);
            $("#signup").css("z-index", 10);
        } else {
            landingBG.removeClass("login");
            landingBG.children(".signup").removeClass("login");
            landingBG.removeClass("login");
            $("#login").delay(400).animate({opacity: 1}, 100);
            $("#signup").animate({opacity: 0}, 25); 
            
            $("#login").css("z-index", 10);
            $("#signup").css("z-index", -1);
        }
        
    });
    
    if (window.location.href.split("#")[1] === "login") {
        landingBG.addClass("login");
        landingBG.children(".signup").addClass("login");
        landingBG.addClass("login");
        $("#login").animate({opacity: 0}, 25);
        $("#signup").delay(400).animate({opacity: 1}, 100);
        
        $("#login").css("z-index", -1);
        $("#signup").css("z-index", 10);
    } else if (window.location.href.split("#") === "register") {
        landingBG.removeClass("login");
        landingBG.children(".signup").removeClass("login");
        landingBG.removeClass("login");
        $("#login").delay(400).animate({opacity: 1}, 100);
        $("#signup").animate({opacity: 0}, 25); 
        
        $("#login").css("z-index", 10);
        $("#signup").css("z-index", -1);
    }
});