$(document).ready(function () {
   $(".nav-link").each(function (index, item) {
        $(item).click(function (e) {
            e.preventDefault();

            $(".nav-link").each(function (index1, item1) {
                $(item1).removeClass("active");
            });
            
            $(item).addClass("active");
        });
   });
});