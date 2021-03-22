var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY, hh:mm:ss"));

var time = moment();
var hour = moment().hours()
var past = moment().startOf('day').add(9, "hours");

function startSchedule() {
   
$(".time-block").each(function() {
    var id = $(this).attr("id")
    var planner = localStorage.getItem(id)

    if(planner !== null) {
        $(this).children(".col-md-9").val(planner)
    }
    });
}

startSchedule();
var saveBtn = $(".saveBtn")
saveBtn.on("click", function() {
    var value = $(this).siblings(".description").val();
   var time = $(this).parent().attr("id");
      
       localStorage.setItem(time, value);
   });


function timeColor() { 
var hour = time.hours()
$(".description").each(function() {
    var present = parseInt($(this).attr("id"));
    if (present === hour) {
        $(this).addClass("present").css("background-color:", "red");
        console.log(time)
    }
    else if (present > hour) {
        $(this).addClass("future").css("background-color:", "green");
        console.log(time)
    } 
    else { (present === past)
        $(".description").addClass("past").css("background-color:", "gray");
}
}); 

}

timeColor();


var x = [9, 10, 11, 12, 1, 2, 3, 4, 5];
for (var i = 0; i < x.length; i++) {
    var dataHour = localStorage.getItem(x[i]);
    $(".descrtiption" + x[i]).val(dataHour);
}

