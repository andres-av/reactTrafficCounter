// Import React
import React, {useState} from "react";
// Import components


// Component:
const TrafficLights = () => {

    // function to turn lights on manually
	const [selected, setSelected] = useState("");

	const select = (e) => {
		const clicked = e.target.id
		setSelected(clicked);
	}
    // End of function to turn lights on manually
    // function to show/hide purple light
            // first function shows/hides the purple light
    const [purpleOn, setPurpleOn] = useState("false");
    const handlePurple = () => {
        setPurpleOn(!purpleOn);
    };
            // second function increases/decreases the size of the trafficlight box
    const [lightBoxSmall, setLightBoxSmall] = useState("false");
    const handleLightBoxSmall = () => {
        setLightBoxSmall(!lightBoxSmall);
    }
    // End of function to show/hide purple light

	return (
        <>
            <div className="container">
                <div className="flexContainer">
                    <div className="trafficLightHolder"></div>
                    <div className={(lightBoxSmall ? "lightBoxBig" : "lightBoxSmall")}>
                        <div id="red" className={"red " + (selected == "red" ? "lightOnRed" : "")} onClick={select}></div>
                        <div id="yellow" className={"yellow " + (selected == "yellow" ? "lightOnYellow" : "")} onClick={select}></div>
                        <div id="green" className={"green " + (selected == "green" ? "lightOnGreen" : "")} onClick={select}></div>
                        <div id="purple" className={(purpleOn ? "purpleOn" : "purpleOff") + " " + (selected == "purple" ? "lightOnPurple" : "")} onClick={select}></div>
                    </div>
                </div>
                <div className="buttons">
                <button className="btn" onClick={() => {handleLightBoxSmall(); handlePurple()}}>Purple Light ON/OFF</button>
                <button id="buttonCycle" className="btn">Cycle through lights</button>
                </div>
            </div>
        </>
	);
};

export default TrafficLights;
