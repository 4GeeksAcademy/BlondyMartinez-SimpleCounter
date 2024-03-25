import React from "react";
import ReactDOM from "react-dom";

import "../styles/index.css";

import Home from "./component/home.jsx";

let seconds = 0;
let minutes = 0;
let typeOfCounter = 'ON_LOAD';

let counterInterval = setInterval(updateCounter, 1000);

function updateCounter() {
    const { title, counter } = handleCounterType();
    ReactDOM.render(<Home title={title} counter={counter} setCountdown={setCountdown} />, document.querySelector("#app"));
}


function formatTime(m, s) {
    return `${formatNumber(m)}:${formatNumber(s)}`;
}

function formatNumber(number) {
    return number >= 10 ? number : '0' + number;
}

function handleCounterType() {
    let title = '';

    switch (typeOfCounter) {
        case 'ON_LOAD':
            seconds++;
        
            if (seconds >= 60) {
                minutes++;
                seconds = 0;
            }
            title = "Time passed since on load.";
            break;

        case 'COUNTDOWN':
            seconds--;
        
            if (seconds < 0) {
                if (minutes <= 0) {
                    stopCounter();
                    break;
                }

                minutes = minutes > 0 ? --minutes : minutes;
                seconds = 59;
            }

            title = 'Countdown from given number.';
            break;
    }

    return { title, counter: formatTime(minutes, seconds) };
}

function setCountdown(value) {
    typeOfCounter = "COUNTDOWN";
    value++;
    minutes = Math.floor(value / 60);
    seconds = value % 60;
    
    if (!counterInterval) counterInterval = setInterval(updateCounter, 1000);
}

function stopCounter(){
    clearInterval(counterInterval);
    counterInterval = null;
}