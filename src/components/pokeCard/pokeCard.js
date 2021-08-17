import { useState } from "react";
import {
    PokeCardContainer,
    InnerWrapper,
    ImageWrapper,
    InfoWrapper,
    CardFront,
    CardBack,
} from "./pokeCard.elements";
import SvgGradient from "./svgGradient";
import Chip from "../shared/chip";
import { colorizer } from "../../utils/colorizer";

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
                        <div className="overflow">
                            <div className="blob">
                                <svg
                                    viewBox="0 0 200 200"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <SvgGradient
                                        colors={colorizer(card.type[0])}
                                        id={parseInt(card.id.slice(-2))}
                                    />
                                    <path
                                        fill={`url(#grad${parseInt(
                                            card.id.slice(-2)
                                        )})`}
                                        d="M26.5,-13.5C32.4,9.4,33.7,28.9,25,35.5C16.2,42.1,-2.7,36,-20,24.2C-37.2,12.4,-52.8,-4.9,-49.2,-24.7C-45.6,-44.5,-22.8,-66.8,-6.2,-64.8C10.3,-62.8,20.7,-36.4,26.5,-13.5Z"
                                        transform="translate(100 100)"
                                    />
                                </svg>
                            </div>
                            <div className="image">
                                <img
                                    src={`./img/${card.id}.png`}
                                    alt={card.name}
                                ></img>
                            </div>
                        </div>
                    </ImageWrapper>
                    <InfoWrapper>
                        <p className="poke-number">{card.number}</p>
                        <h2 className="poke-name">{card.name}</h2>
                        <h4>Type:</h4>
                        <ul className="poke-info-type">
                            {card.type.map((type) => {
                                return (
                                    <li key={type}>
                                        <Chip
                                            type={type}
                                            colors={colorizer(type)}
                                        />
                                    </li>
                                );
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
