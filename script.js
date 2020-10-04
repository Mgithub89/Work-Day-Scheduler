var currentDate = moment()
appoArray = [];
var appoTime = "";
var appoText = "";

$("#currentDay").append(currentDate.format("llll"));

let currentTime = currentDate.format("H");

$(".form-control").each(function () {
    if ($(this).data("number") == currentTime) {

        $(this).addClass("present");
    }
    else if ($(this).data("number") < currentTime) {

        $(this).addClass("past");
    }
    else {
        $(this).addClass("future");
    }
});

$(".saveBtn").on("click", function () {
    var appoText = $(this).parent('div').children('.inputText').children('textarea').val();

    var appoTime = $(this).parent("div").children(".time-block").text();

    console.log(`${appoTime} : ${appoText}`);

    todayTask = {
        time: appoTime,
        subject: appoText
    }

    var storedArray = JSON.parse(localStorage.getItem("todaySchedule"));
    // if (storedArray === null) {
    appoArray.push(todayTask);
    localStorage.setItem("todaySchedule", JSON.stringify(appoArray));




})
