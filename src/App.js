import React, { useState } from "react";
import Header from './components/Header';
import CardsGrid from './components/CardsGrid'

export default function App() {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [cardsSelected, setCardsSelected] = useState([]);

    const incrementScore = () => {
        setScore(score + 1);
    }

    const resetGame = () => {
        setScore(0);
        setCardsSelected([]);
    }

    const handleHighScore = () => {
        if (score > highScore) {
            setHighScore(score);
        }
    }

    const addSelectedCard = (card) => {
        setCardsSelected((prevCards) => [...prevCards, card]);
    }

    const addWinEffect = (cardElement) => {
        // cardElement.classList.add("correct");
    }

    const addLoseEffect = (cardElement) => {
        // cardElement.classList.add("wrong");
    }

    const handleCardOnClick = (card, cardElement) => {

        // console.log(cardsSelected, card);

        if (cardsSelected.includes(card)) {
            //lose
            addLoseEffect(cardElement);
            resetGame();
            handleHighScore();
        } else {
            //win
            addWinEffect(cardElement);
            addSelectedCard(card);
            incrementScore();
        }

    }

    return (
        <div className="content">
            <Header score={score} highScore={highScore} />
            <CardsGrid handleCardOnClick={handleCardOnClick} />
        </div>
    )
}