

$(document).ready(function () {
    var storedEvent;
    var savedEvent;
    var event;
    var eventsArray = [];
    var eventsObject = {};
    var dateEl;
    var dateObj;
    var storedDate;
    var dateArray;
    var timeArray;

    var hour;

    function init() {
        setInterval();
        storeCurrentDate();
        storeNewDate();
        changeColour();
        saveTask();
        storeDate();
        clearEvents();
    }
    // Display current date with time
    setInterval(function () {
        var dateEl = moment().format("dddd, MMMM Do YYYY | h:mm:ss a");

        var dateDiv = document.querySelector("#displayMoment");
        dateDiv.textContent = dateEl;

    }, 1000);


    function storeCurrentDate() {
        storedDate = JSON.parse(localStorage.getItem(date));

        if (storedDate === null) {
            dateEl = storedDate;
            dateObj['date'] = dateEl;

            dateArray.push(dateObj);
            localStorage.setItem(dateEl, JSON.stringify(dateArray));
        }

    }

    function storeNewDate() {
        var existingDate = JSON.parse(localStorage.getItem(dateEl));

        if (existingDate !== null) {
            timeArray = existingDate;
        }
    }

    function changeColour() {
        var currentHour = parseInt(moment().format('h'));
        var timeEl = $("#tr[id]").map(function () {
            return this.id;
        });

        for (var i = 0; i < timeEl.length; i++) {
            var timeElInt = parseInt(timeEl[i]);
        }

        if (timeElInt === currentHour) {
            $('#' + timeElInt[i]).find('textarea').css('background-color', '#3cb371');
        } else if (timeElInt < currentHour) {
            $("#" + timeElInt[i]).find('textarea').css('background-color', '#ffdab9');
        } else if (timeElInt > currentHour) {
            $("#" + timeElInt[i]).find('textarea').css('background-color', 'lightgray');
        }

    }

    function saveTask() {
        $(".save-button").on("click", function (event) {
            event.preventDefault(event);
            savedEvent = event.target;
            eventsObject = {};


        });

    }

    function storeDate() {
        localStorage.setItem("event", JSON.stringify(eventsArray));
        console.log(savedEvent);
    }

    function clearEvents() {
        $(".input-area").val("");
        localStorage.clear();
    }


});