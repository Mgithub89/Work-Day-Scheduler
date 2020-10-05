var currentDate = moment()

//add current date and time 
$("#currentDay").text(currentDate.format("llll"));

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

    // localStorage.setItem("9AM", ($("#9AM").val()))
    // localStorage.setItem("10AM", ($("#10AM").val()))
    // localStorage.setItem("11AM", ($("#11AM").val()))
    // localStorage.setItem("12PM", ($("#12PM").val()))
    // localStorage.setItem("1PM", ($("#1PM").val()))
    // localStorage.setItem("2PM", ($("#2PM").val()))
    // localStorage.setItem("3PM", ($("#3PM").val()))
    // localStorage.setItem("4PM", ($("#4PM").val()))
    // localStorage.setItem("5PM", ($("#5PM").val()))

    var appoText = $(this).parent('div').children('.inputText').children('textarea').val();
    var appoTime = $(this).parent("div").children(".time-block").text();

    if (appoText === "") {
        return
    }
    else {
        localStorage.setItem(appoTime, appoText);
    }

});

// $("#9AM").text(localStorage.getItem("9AM"));
// $("#10AM").text(localStorage.getItem("10AM"));
// $("#11AM").text(localStorage.getItem("11AM"));
// $("#12PM").text(localStorage.getItem("12PM"));
// $("#1PM").text(localStorage.getItem("1PM"));
// $("#2PM").text(localStorage.getItem("2PM"));
// $("#3PM").text(localStorage.getItem("3PM"));
// $("#4PM").text(localStorage.getItem("4PM"));
// $("#5PM").text(localStorage.getItem("5PM"));



$("textarea").each(function () {
    for (i = 0; i < localStorage.length; i++) {
        var id = $(this).attr("id");
        var key = localStorage.key(i);
        var text = localStorage.getItem(key);

        if (id === key) {
            $(this).text(text)
        }
    }
})
