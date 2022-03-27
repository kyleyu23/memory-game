import React, { useState, useEffect } from "react";
import '../styles/card.css'


const DEFAULT_CARD_CLASS = 'card';
export default function Card(props) {

    const { shuffleCards, handleCardOnClick, img, name, isSelected } = props;

    const [cardClassList, setCardClassList] = useState(DEFAULT_CARD_CLASS);
    const [playAnimation, setAnimation] = useState(false);

    useEffect(() => {
        //runs on mount and everytime the passed in [state/prop] updates
        if (playAnimation) {
            setTimeout(() => {
                setCardClassList(DEFAULT_CARD_CLASS);
                shuffleCards();
            }, 200);
        }
        setAnimation(false);

    }, [playAnimation])

    const handleClick = () => {
        handleCardOnClick(name);
        handleAnimation();
    }

    function handleAnimation() {

        isSelected ? setCardClassList('card lose') : setCardClassList('card win');

        setAnimation(true);
    }

    return (
        <div
            className={cardClassList}
            onClick={handleClick}
        >
            <img src={img} alt={name}></img>

            <div className="cardTitle">{name}</div>

        </div>
    )
}