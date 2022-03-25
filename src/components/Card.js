import React, { useState } from "react";
import '../styles/card.css'

export default function Card(props) {

    const handleClick = () => {
        // console.log("before", props);
        props.shuffle();

        if (props.clicked) {
            props.resetGame();
        } else {
            props.incrementScore();
        }

        props.reverseClicked();

        // console.log("after", props);

    }

    return (
        <div
            className="card"
            onClick={handleClick}
        >
            <img src={props.img} alt={props.name}></img>
            <div className="cardTitle">{props.name}</div>
        </div>
    )
}