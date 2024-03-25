import React, { useRef } from "react";
import { Helmet } from 'react-helmet';

function Home(props){ 
    const inputRef = useRef(null);

	return (
		<div className="d-flex flex-column align-items-center justify-content-center">
			<Helmet>
        		<script src="https://kit.fontawesome.com/a20bb7d309.js" crossorigin="anonymous" defer />
      		</Helmet>
			<div className="text-center my-3">
				<h1 className="counter-title">{props.title}</h1>
				<h1 className="counter-text">{props.counter}</h1>
			</div>
			<div className="mt-5">
				<button className="btn ms-3 fs-1 control-button text-primary" onClick={() => props.stop()}><i class="fa-solid fa-stop"></i></button>
				<button className="btn ms-3 fs-1 control-button text-primary" onClick={() => props.resume()}><i class="fa-solid fa-play"></i></button>
				<button className="btn ms-3 fs-1 control-button text-primary" onClick={() => props.restart()}><i class="fa-solid fa-arrow-rotate-left"></i></button>
			</div>
			<div className="mt-5">
				<input className="input-bar" ref={inputRef} id="search-bar" type="number" placeholder="Number of seconds."></input>	
				<button className="btn btn-primary ms-3" onClick={() => props.setCountdown(inputRef.current.value)}>Set Countdown</button>
			</div>
		</div>
	);
};

export default Home;
