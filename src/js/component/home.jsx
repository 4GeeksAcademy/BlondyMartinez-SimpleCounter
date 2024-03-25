import React, { useRef } from "react";

function Home(props){ 
    const inputRef = useRef(null);

	return (
		<div className="d-flex flex-column align-items-center justify-content-center">
			<div className="text-center my-3">
				<h1 className="counter-title">{props.title}</h1>
				<h1 className="counter-text">{props.counter}</h1>
			</div>
			<div className="mt-5">
				<input className="input-bar" ref={inputRef} id="search-bar" type="number" placeholder="Number of seconds."></input>	
				<button className="btn btn-primary ms-3" onClick={() => props.setCountdown(inputRef.current.value)}>Set Countdown</button>
			</div>
		</div>
	);
};

export default Home;
