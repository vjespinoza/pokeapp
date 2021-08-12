import { useState } from "react";
import {
    PokeCardContainer,
    InnerWrapper,
    ImageWrapper,
    InfoWrapper,
    CardFront,
    CardBack,
} from "./pokeCard.elements";

const PokeCard = ({ card }) => {
    const [flipCard, setFlipCard] = useState(false);

    const handleFlipcard = () => {
        setFlipCard((flipCard) => !flipCard);
    };

    return (
        <PokeCardContainer
            id={card.id}
            flipCard={flipCard}
            onClick={handleFlipcard}
        >
            <InnerWrapper flipCard={flipCard}>
                <CardFront>
                    <ImageWrapper>
                        <img src={`./img/${card.id}.png`} alt={card.name}></img>
                    </ImageWrapper>
                    <InfoWrapper>
                        <h1>{card.name}</h1>
                        <p>Categoría: {card.category}</p>
                        <p>Habilidades: {card.abilities}</p>
                        <ul>
                            Debilidades:
                            {card.weaknesses.map((weakness) => {
                                return <li key={weakness}>{weakness}</li>;
                            })}
                        </ul>
                    </InfoWrapper>
                </CardFront>
                <CardBack>
                    <img src={`./img/poke-logo.png`} alt={card.name}></img>
                </CardBack>
            </InnerWrapper>
        </PokeCardContainer>
    );
};

export default PokeCard;
