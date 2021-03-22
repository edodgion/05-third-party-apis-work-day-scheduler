//current time through moment.js
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY, hh:mm:ss"));

var time = moment();
var hour = moment().hours()

function startSchedule() {
  $(".time-block").each(function () {
    //current HMTL element selecting attribute "id" and storing it locally
    var id = $(this).attr("id");
    var description = localStorage.getItem(id);

    if (description !== null) {
      $(this).children(".col-md-9").val(description);
    }
  });
}

startSchedule();
var saveBtn = $(".saveBtn");
saveBtn.on("click", function (event) {
  event.preventDefault();
  var value = $(this).siblings(".description").val();
  var time = $(this).parent().find(".hour").attr("data-hour");

//using string literal to pull the hour ID and variable together for local storage
  localStorage.setItem(`hour-${time}`, value);
});

function timeColor() {
  $(".description").each(function () {
    //moment format to 24hr clock
      var currentTime  = parseInt(moment().format("H"));
    var hourBlock = parseInt($(this).parent().find(".hour").attr("data-hour"));
   
    if (hourBlock === currentTime) {
      $(this).addClass("present")

    } else if (hourBlock > currentTime) {
      $(this).addClass("future")
    
    } else {
      $(this).addClass("past")
    }
  });
}

timeColor();
//loop using pulling each id and storing the values indiviually
for (var i = 9; i < 24; i++) {
  var localStorageData = localStorage.getItem(`hour-${i}`);
  if (localStorageData != null) {
    $(`#hour-${i}`).val(localStorageData);
  }
}

