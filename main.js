let currentSecs = 0;
let currentMins = 0;
let currentHours = 0;

let counting = false;
let interval;

function updateScreen() {
    document.getElementById("hours").innerHTML = currentHours.toString();
    document.getElementById("minutes").innerHTML = currentMins.toString().padStart(2, '0');
    document.getElementById("seconds").innerHTML = currentSecs.toString().padStart(2, '0');
}

function updateCounter() {
    if (currentSecs == 59) {
        if (currentMins == 59) {
            currentHours++;
            currentMins = 0;
        } else {
            currentMins++;
        }
        currentSecs = 0
    } else {
        currentSecs++;
    }
    updateScreen();
}

function start() {
    //starts counting
    interval = setInterval(updateCounter, 1000);
    counting = true;
    document.getElementById("startstop").innerHTML = "STOP";
    updateScreen();

}

function stop() {
    // stops counting
    clearInterval(interval);
    counting = false;
    document.getElementById("startstop").innerHTML = "START";
    updateScreen();

}

function reset() {
    // resetting the count
    clearInterval(interval);
    counting = false;

    currentHours = 0;
    currentMins = 0;
    currentSecs = 0;

    document.getElementById("startstop").innerHTML = "START"

    updateScreen();
}

document.getElementById("startstop").addEventListener("click", () => {
    if (counting) stop();
    else start();
});

document.getElementById("reset").addEventListener("click", reset);