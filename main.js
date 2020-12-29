var currentSecs = 0;
var currentMins = 0;
var currentHours = 0;

function updateCounter() {
    if (currentSecs == 59) {
        if (currentMins == 59) {
            currentHours++;
            currentMins = 0;
        } else {
            currentMins++;
        }
        currentSecs = 0
    }
}

function updateScreen() {
    document.getElementById("hours").innerHTML = currentHours;
    document.getElementById("minutes").innerHTML = currentMins;
    document.getElementById("seconds").innerHTML = currentSecs;
}