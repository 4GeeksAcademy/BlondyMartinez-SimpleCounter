//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

const COUNTER = document.querySelector(".counter-text");
let seconds = 0;
let minutes = 0;

function increaseSecondsInCounter() {
    seconds++;

    if (seconds >= 60) {
        minutes++;
        seconds = 0;
    }

    ReactDOM.render(<Home counter={formatTime(minutes, seconds)}/>, document.querySelector("#app"));
}

function formatTime(m, s) {
    return `${formatNumber(m)}:${formatNumber(s)}`;
}

function formatNumber(number) {
    return number >= 10 ? number : '0' + number;
}

setInterval(increaseSecondsInCounter, 1000);

