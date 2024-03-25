import React from "react";
import ReactDOM from "react-dom";
import "../../styles/index.css";
import Home from "../component/home.jsx";


class Counter {
    constructor() {
        this.seconds = 0;
        this.minutes = 0;
        this.typeOfCounter = 'ON_LOAD';
        this.userInput = 0;
        this.counterInterval = null;
    }
    
    start() {
        if (!this.counterInterval) this.counterInterval = setInterval(this.update.bind(this), 1000);
    }
    
    update() {
        const { title, counter } = this.handleCounterType();
        ReactDOM.render(<Home 
                title={title} 
                counter={counter} 
                setCountdown={this.setCountdown.bind(this)} 
                stop={this.stopCounter.bind(this)} 
                resume={this.start.bind(this)} 
                restart={this.restart.bind(this)} />, 
            document.querySelector("#app"));
    }

    
    setCountdown(value) {
        if (!value) return;
    
        this.userInput = value;
    
        this.typeOfCounter = "COUNTDOWN";
        value++;
        this.minutes = Math.floor(value / 60);
        this.seconds = value % 60;
        
        this.start();
    }
    
    stopCounter() {
        clearInterval(this.counterInterval);
        this.counterInterval = null;
    }
    
    restart() {
        this.setCountdown(this.userInput);
    }
    
    
    formatTime(m, s) {
        return `${this.formatNumber(m)}:${this.formatNumber(s)}`;
    }
    
    formatNumber(number) {
        return number >= 10 ? number : '0' + number;
    }
    
    handleCounterType() {
        let title = '';
    
        switch (this.typeOfCounter) {
            case 'ON_LOAD':
                this.seconds++;
            
                if (this.seconds >= 60) {
                    this.minutes++;
                    this.seconds = 0;
                }
                title = "Time passed since on load.";
                break;
    
            case 'COUNTDOWN':
                this.seconds--;
            
                if (this.seconds < 0) {
                    if (this.minutes <= 0) {
                        this.stopCounter();
                        this.seconds = 0;
                        break;
                    }
    
                    this.minutes = this.minutes > 0 ? --this.minutes : this.minutes;
                    this.seconds = 59;
                }
    
                title = 'Countdown from given number.';
                break;
        }
    
        return { title, counter: this.formatTime(this.minutes, this.seconds) };
    }
}

export default Counter;