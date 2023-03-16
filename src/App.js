import React, { useState } from "react";
import "../src/assets/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
const App = () => {
    const [background, changeColor] = useState("light");

    const toGreen = () => changeColor("green-color");
    const toRed = () => changeColor("red-color");
    const toBlue = () => changeColor("blue-color");
    const light = () => changeColor("light");

    return (
        <div className={`${background} div-style`}>
            <div>
                {background === "light" ? (
                    <button onClick={toGreen} style={{ fontSize: "80px", color: "green" }}>
                        <FontAwesomeIcon icon={faGithub} />
                    </button>
                ) : (
                    <button onClick={light} style={{ fontSize: "75px" }}>
                        <FontAwesomeIcon icon={faGithub} style={{ color: "blue" }} />
                    </button>
                )}
            </div>
            <div>
                {background === "light" ? (
                    <button onClick={toBlue} style={{ fontSize: "80px", color: "blue" }}>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </button>
                ) : (
                    <button onClick={light} style={{ fontSize: "75px" }}>
                        <FontAwesomeIcon icon={faLinkedin} style={{ color: "red" }} />
                    </button>
                )}
            </div>
            <div>
                {background === "light" ? (
                    <button onClick={toRed} style={{ fontSize: "80px", color: "red" }}>
                        <FontAwesomeIcon icon={faYoutube} />
                    </button>
                ) : (
                    <button onClick={light} style={{ fontSize: "75px" }}>
                        <FontAwesomeIcon icon={faYoutube} style={{ color: "green" }} />
                    </button>
                )}
            </div>
        </div>
    );
};

export default App;
