import React from "react";
import '../styles/header.css'

export default function Header(props) {

    const { score, highScore } = props;

    return (
        <div className="header">
            <div className="left-header">
                <div className="headerTitle">
                    <i>
                        Initial
                        <span className="redD"> D </span>
                    </i>
                    Memory Game
                </div>
                <p className="yellow">Get points by clicking on an image, but not more than once</p>
                <br />
            </div>

            <div className="right-header yellow">
                <div id="score">
                    {`Score: ${score}`}
                </div>
                <div>
                    {`Best: ${highScore}`}
                </div>
            </div>

        </div>
    )
}