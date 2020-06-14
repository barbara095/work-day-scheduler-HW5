
// Display current date with time
setInterval(function () {
    var timeEl = moment().format("dddd, MMMM Do YYYY | h:mm:ss a");

    var timeDiv = document.querySelector("#displayMoment");
    timeDiv.textContent = timeEl;

}, 1000);

