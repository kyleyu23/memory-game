import '../styles/card.css'

export default function Card(props) {

    const { shuffleCards, handleCardOnClick, img, name } = props;

    const handleClick = (e) => {
        const card = e.currentTarget.id;
        const cardElement = e.currentTarget;
        handleCardOnClick(card, cardElement);

        shuffleCards();
    }

    return (
        <div
            className="card"
            onClick={(e) => handleClick(e)}
            id={name}
        >
            <img src={img} alt={name}></img>

            <div className="cardTitle">{name}</div>

        </div>
    )
}