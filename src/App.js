import React, { useState } from "react";
import Header from './components/Header';
import CardsGrid from './components/CardsGrid'

export default function App() {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    const incrementScore = () => {
        setScore(score + 1);
    }

    const resetGame = () => {

        if (score > highScore) {
            setHighScore(score);
        }

        setScore(0);

    }

    return (
        <div className="content">
            <Header
                score={score}
                highScore={highScore}
            />
            <CardsGrid
                score={score}
                incrementScore={incrementScore}
                resetGame={resetGame}
            />

        </div>
    )
}