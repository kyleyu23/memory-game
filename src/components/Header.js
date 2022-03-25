import React from "react";
import '../styles/header.css'

export default function Header(props) {
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
                <div>
                    {`Score: ${props.score}`}
                </div>
                <div>
                    {`Best: ${props.highScore}`}
                </div>
            </div>

        </div>
    )
}