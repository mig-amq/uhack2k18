var currdot = 1;
    
var answers = {
    salary: 0.0,
    saving: true,
    saved: 0,
    willing: 0.0,
    interval: "week"
};
$(document).ready (function () {
    var calib = $("#calibrations");
    
    calib.modal({
        show: true,
        backdrop: "static"
    });
    
});

function move (index, element) {
    if (!$(element).hasClass("disabled")) {
        var questions = $("#questions").children(".question-block");
        var dots = $("#dots").children(".dot");
        currdot += index;
        index = currdot;

        if (index <= 0)
            index = 1;
        else if (index >= 6)
            index = 5;

        if (index <= 1) {
            $("#prev").addClass("disabled");
        } else {
            $("#prev").removeClass("disabled");
        }

        questions.each(function (index2, item2) {$(item2).removeClass("question-show")})
        questions.each(function (index1, item) {
            var dot_id = $(item).attr("data-dot-id");

            if (index > 1 && parseInt(dot_id) === index - 1) {
                var value;
                
                switch (parseInt(dot_id)) {
                    case 1:
                        answers.salary = $("#salary").val();
                        break;
                    case 2:
                            if($("input[name=saving]:checked").attr("id") === "nosaving"){
                                answers.saving = false;
                                index += 1;
                                currdot++;
                            }
                        break;
                    case 3:
                        answers.saved = $("#saved").val();
                        break;
                    case 4:
                        
                        if ($("input[name=wsaving]:checked").attr("id") === "d")
                            answers.interval = "d";
                        else if ($("input[name=wsaving]:checked").attr("id") === "w")
                            answers.interval = "w";
                        else 
                            answers.interval = "m";
                        
                        answers.willing = $("#wsave").val();
                        break;
                }
            }
            
            if (dot_id == index) {
                    $(item).addClass("go-up question-show");
            }
        });

        dots.each(function (index1, item) {
            if (parseInt($(item).attr("data-dot-id")) <= index)
                $(item).addClass("active");
            else
                $(item).removeClass("active");

        });
        
        if (index === 5)
            $("#calibrations").modal('toggle');
    }
}