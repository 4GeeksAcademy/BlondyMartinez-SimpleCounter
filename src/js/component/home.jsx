import React from "react";

//create your first component
function Home(props){ 
	return (
		<div className="text-center">
			<h1 className="counter-text">{props.seconds}</h1>
		</div>
	);
};

export default Home;
