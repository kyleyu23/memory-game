import React from "react";
import Card from './Card'
import '../styles/cardsGrid.css'

//import car images
import WRX from '../media/Bunta_Impreza_Fourth_Stage.webp';
import AE86 from '../media/Fifth_Stage_Eight-Six.webp';
import FD from '../media/Keisuke_FD3S_Fifth_Stage_Upgraded.webp';
import FC from '../media/Ryosuke_FC3S_Third_Stage.webp';
import R32 from '../media/Nightkids_R32_Back.webp';
import SilEighty from '../media/SilEighty_Extra_Stage_2.webp';
import S2000 from '../media/Joshima_S2000_Fourth_Stage.webp';
import EVO3 from '../media/Kyoichi_Evo_III_Final_Stage.webp';
import EVO7 from '../media/Team_246_Lan_EVO_VII_Ingame.webp';
import MR2 from '../media/Kogashiwa_MR2_Third_Stage.webp';





export default function CardsGrid(props) {
    const cars = [
        { name: "Subaru Impreza WRX STi", img: WRX },
        { name: "Toyota Corolla AE86", img: AE86 },
        { name: "Mazda RX-7 FD3S", img: FD },
        { name: "Mazda RX-7 FC3S", img: FC },
        { name: "Nissan Skyline GT-R R32", img: R32 },
        { name: "Nissan SilEighty RPS13", img: SilEighty },
        { name: "Honda S2000", img: S2000 },
        { name: "Mitsubishi Lancer Evolution III", img: EVO3 },
        { name: "Mitsubishi Lancer Evolution VII", img: EVO7 },
        { name: "Toyota MR2", img: MR2 },

    ];
    return (
        <div className="cardsGrid">
            <Card
                img={cars[0].img}
                name={cars[0].name}
            />

            <Card
                img={cars[1].img}
                name={cars[1].name}
            />
        </div>

    )
}