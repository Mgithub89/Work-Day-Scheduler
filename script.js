
$(document).ready(function () {

    //displaying current date and time using moment.js
    var currentDate = moment()
    $("#currentDay").text(currentDate.format("llll"));

    let currentTime = currentDate.format("H");

    // loop to compare currentTime with data-number of each time block element and change the color
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

    //saving value to the local storage using onclick function
    $(".saveBtn").on("click", function (event) {
        event.preventDefault();
        var eventText = $(this).parent('div').children('.inputText').children('textarea').val();
        var eventTime = $(this).parent("div").children(".time-block").text();
        //if event text null return
        if (eventText === "") {
            return
        }
        // save the event in localstorage(key - value pair)
        else {
            localStorage.setItem(eventTime, eventText);
        }

    });
    //loop over textarea and set the localstorage value into textarea
    // saved event persist.  
    $("textarea").each(function () {
        for (i = 0; i < localStorage.length; i++) {
            var eventId = $(this).attr("id");
            var eventKey = localStorage.key(i);
            var text = localStorage.getItem(eventKey);
            //set the value to textarea if eventid===eventkey
            if (eventId === eventKey) {
                $(this).text(text)
            }
        }
    })
});