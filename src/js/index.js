//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

const COUNTER = document.querySelector(".counter-text");
let seconds = 0;

function increaseSecondsInCounter() {
    seconds++;
    ReactDOM.render(<Home seconds={seconds}/>, document.querySelector("#app"));
}

setInterval(increaseSecondsInCounter, 1000);

