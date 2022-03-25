import React, { useState } from "react";
import '../styles/card.css'

export default function Card(props) {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        props.shuffle();

        if (clicked) {
            props.resetGame();
        } else {
            props.incrementScore();
        }

        setClicked(!clicked);
    }

    return (
        <div className="card" onClick={handleClick}>
            <img src={props.img} alt={props.name}></img>
            <div className="cardTitle">{props.name}</div>
        </div>
    )
}