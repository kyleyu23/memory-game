import React from "react";
import '../styles/card.css'

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.img} alt={props.name}></img>
            <div className="cardTitle">{props.name}</div>
        </div>
    )
}