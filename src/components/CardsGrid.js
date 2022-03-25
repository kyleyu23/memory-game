import React, { useState } from "react";
import Card from './Card'
import '../styles/cardsGrid.css'

//import car images
import WRX from '../media/Bunta_Impreza_Fourth_Stage.webp';
import AE86 from '../media/Fifth_Stage_Eight-Six.webp';
import FD from '../media/Keisuke_FD3S_Fifth_Stage_Upgraded.webp';
import FC from '../media/Ryosuke_FC3S_Third_Stage.webp';
import R32 from '../media/Nakazato_R32_New_Initial_D.webp';
import SilEighty from '../media/SilEighty_Extra_Stage_2.webp';
import S2000 from '../media/Joshima_S2000_Fourth_Stage.webp';
import EVO3 from '../media/Kyoichi_Evo_III_Final_Stage.webp';
import EVO7 from '../media/Team_246_Lan_EVO_VII_Ingame.webp';
import MR2 from '../media/Kogashiwa_MR2_Third_Stage.webp';

const DEFAULT_CARS = [
    { name: "Subaru Impreza WRX STi", img: WRX },
    { name: "Toyota Corolla AE86", img: AE86 },
    { name: "Mazda RX-7 FD3S", img: FD },
    { name: "Mazda RX-7 FC3S", img: FC },
    { name: "Nissan Skyline GT-R R32", img: R32 },
    { name: "Nissan SilEighty RPS13", img: SilEighty },
    { name: "Honda S2000", img: S2000 },
    { name: "Mitsubishi Lancer Evolution III", img: EVO3 },
    { name: "Mitsubishi Lancer Evolution VII", img: EVO7 },
    { name: "Toyota MR2", img: MR2 }
]

export default function CardsGrid(props) {

    const handleCardOnClick = props.handleCardOnClick;

    const [cars, setCars] = useState(DEFAULT_CARS);

    const shuffleArray = (array) => {
        let shuffledArray = array.slice();
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;

    };

    const shuffleCards = () => {
        setCars(shuffleArray(cars));
    };

    return (
        <div className="cardsGrid">
            {cars.map(car => (
                <Card
                    name={car.name}
                    key={car.name}
                    img={car.img}
                    shuffleCards={shuffleCards}
                    handleCardOnClick={handleCardOnClick}
                />
            ))}
        </div>

    )
}