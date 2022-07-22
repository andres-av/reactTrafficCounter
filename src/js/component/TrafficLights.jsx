// Import React
import React, {useState} from "react";
// Import components


// Component:
const TrafficLights = () => {

	const [selected, setSelected] = useState("");

	const select = (e) => {
		const clicked = e.target.id
		setSelected(clicked);
	}

	return (
        <>
            <div className="container">
                <div className="flexContainer">
                    <div className="trafficLightHolder"></div>
                    <div className="trafficLightBox">
                        <div id="red" className={"light red " + (selected == "red" ? "lightOnRed" : "")} onClick={select}></div>
                        <div id="yellow" className={"light yellow " + (selected == "yellow" ? "lightOnYellow" : "")} onClick={select}></div>
                        <div id="green" className={"light green " + (selected == "green" ? "lightOnGreen" : "")} onClick={select}></div>
                        <div id="purple" className={"light purple " + (selected == "purple" ? "lightOnPurple" : "")} onClick={select}></div>
                    </div>
                </div>
                <div className="buttons">
                <button id="purpleActivator" className="btn">Show Purple Light</button>
                <button id="buttonCycle" className="btn">Cycle through lights</button>
                </div>
            </div>
        </>
	);
};

export default TrafficLights;
