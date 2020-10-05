var currentDate = moment()

//add current date and time 
$("#currentDay").append(currentDate.format("llll"));

let currentTime = currentDate.format("H");


//comparing currentTime with data-number of each time block element
$(".form-control").each(function () {
    // add class "present" if currentTime equals data number
    if ($(this).data("number") == currentTime) {

        $(this).addClass("present");
    }
    // add class "past" if data-number less than currentTime
    else if ($(this).data("number") < currentTime) {

        $(this).addClass("past");
    }
    // add class "future" if data-number greater than currentTime
    else {
        $(this).addClass("future");
    }
});

$(".saveBtn").on("click", function () {

    localStorage.setItem("9AM", ($("#9AM").val()))
    localStorage.setItem("10AM", ($("#10AM").val()))
    localStorage.setItem("11AM", ($("#11AM").val()))
    localStorage.setItem("12PM", ($("#12PM").val()))
    localStorage.setItem("1PM", ($("#1PM").val()))
    localStorage.setItem("2PM", ($("#2PM").val()))
    localStorage.setItem("3PM", ($("#3PM").val()))
    localStorage.setItem("4PM", ($("#4PM").val()))
    localStorage.setItem("5PM", ($("#5PM").val()))

});

$("#9AM").text(localStorage.getItem("9AM"));
$("#10AM").text(localStorage.getItem("10AM"));
$("#11AM").text(localStorage.getItem("11AM"));
$("#12PM").text(localStorage.getItem("12PM"));
$("#1PM").text(localStorage.getItem("1PM"));
$("#2PM").text(localStorage.getItem("2PM"));
$("#3PM").text(localStorage.getItem("3PM"));
$("#4PM").text(localStorage.getItem("4PM"));
$("#5PM").text(localStorage.getItem("5PM"));


// var appoText = $(this).parent('div').children('.inputText').children('textarea').val();
    // var appoTime = $(this).parent("div").children(".time-block").text();

    // console.log(`${appoTime} : ${appoText}`);
    // todayTask = {
    //     time: appoTime,
    //     subject: appoText
    // }

     // storedArray = JSON.parse(localStorage.getItem("todaySchedule"));
    // if (!storedArray) {

    //     localStorage.setItem("todaySchedule", JSON.stringify({ subject: appoText }));
    //     // localStorage.setItem("todaySchedule", JSON.stringify([todayTask]));
    // }
    // else {
    //     storedArray.push(todayTask);
    //     localStorage.setItem("todaySchedule", JSON.stringify(storedArray));
    // }

    // / var appoTime = "";
// var appoText = "";
// var storedArray = [];
// var todayTask;
// var item;

// var $text9AM = $("#9AM");
// var $text10AM = $("#10AM");
// var $text11AM = $("#11AM");
// var $text12PM = $("#12PM");
// var $text1PM = $("#1PM");
// var $text2PM = $("#2PM");
// var $text3PM = $("#3PM");
// var $text4PM = $("#4PM");
// var $text5PM = $("#5PM");