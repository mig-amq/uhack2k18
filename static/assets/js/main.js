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

    $("#tracker").on("submit", function (e) {
        e.preventDefault();

        var category = $("#category").val();
        var amount = $("#amount").val();
        var color = $("#color").val();

        var ticket = $("<div class='ticket'></div>");
        var title = $("<div class='ttitle'> " + category + "</div>")
        var amt = $("<div class='amt'> Php. " + parseFloat(amount) + "</div>");
        ticket.css("background-color", color);

        ticket.append(title);
        ticket.append(amt);
        
        $("#categories").append(ticket);
    });

    $(".nav-link").click(function (e) {
        $(".nav-link").each(function (index, item) {
            var target = $(item).attr('data-target');
            
            $("#" + target).removeClass();
        });

        var target = $(this).attr('data-target');

        $("#" + target).addClass(target + "-show");
    });
});