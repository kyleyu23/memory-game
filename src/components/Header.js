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
                <p className="yellow">Click on a different card every round to score</p>
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