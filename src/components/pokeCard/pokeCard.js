import { useState } from "react";
import {
    PokeCardContainer,
    InnerWrapper,
    ImageWrapper,
    InfoWrapper,
    CardFront,
    CardBack,
    BackInfo,
    BackInfoLeft,
    BackInfoRight,
    BackSlider,
    SliderLeft,
    SliderRigth,
} from "./pokeCard.elements";
import SvgGradient from "./svgGradient";
import Chip from "../shared/chip";
import { colorizer } from "../../utils/colorizer";
import { X } from "@styled-icons/bootstrap";

const PokeCard = ({ poke }) => {
    const [flipCard, setFlipCard] = useState(false);

    const handleFlipcard = () => {
        setFlipCard((flipCard) => !flipCard);
    };

    return (
        <PokeCardContainer id={`${poke.name}-${poke.id}`}>
            <InnerWrapper flipCard={flipCard}>
                <CardFront flipCard={flipCard} onClick={handleFlipcard}>
                    <ImageWrapper>
                        <div className="overflow">
                            <div className="blob">
                                <svg
                                    viewBox="0 0 200 200"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <SvgGradient
                                        colors={colorizer(
                                            poke.types[0].type.name
                                        )}
                                        id={parseInt(poke.id)}
                                    />
                                    <path
                                        fill={`url(#grad${poke.id})`}
                                        d="M26.5,-13.5C32.4,9.4,33.7,28.9,25,35.5C16.2,42.1,-2.7,36,-20,24.2C-37.2,12.4,-52.8,-4.9,-49.2,-24.7C-45.6,-44.5,-22.8,-66.8,-6.2,-64.8C10.3,-62.8,20.7,-36.4,26.5,-13.5Z"
                                        transform="translate(100 100)"
                                    />
                                </svg>
                            </div>
                            <div className="image">
                                <img
                                    src={
                                        poke.sprites.other["official-artwork"]
                                            .front_default
                                    }
                                    alt={poke.name}
                                ></img>
                            </div>
                        </div>
                    </ImageWrapper>
                    <InfoWrapper>
                        <p className="poke-number">{`#${poke.id
                            .toString()
                            .padStart(3, "0")}`}</p>
                        <h2 className="poke-name">{poke.name}</h2>
                        <h4>Tipos:</h4>
                        <ul className="poke-info-type">
                            {poke.types.map((type, i) => {
                                return (
                                    <li key={i}>
                                        <Chip
                                            type={type.type.name}
                                            colors={colorizer(type.type.name)}
                                        />
                                    </li>
                                );
                            })}
                        </ul>
                    </InfoWrapper>
                </CardFront>
                <CardBack flipCard={flipCard}>
                    <span onClick={handleFlipcard}>
                        <X size="18" />
                    </span>
                    <BackInfo>
                        <BackInfoLeft>
                            <h4>Debilidad:</h4>
                            <h4>Habilidad:</h4>
                        </BackInfoLeft>
                        <BackInfoRight>
                            <h4>Altura:</h4>
                            <h4>Peso:</h4>
                            <h4>Sexo:</h4>
                            <h4>Categoria:</h4>
                        </BackInfoRight>
                    </BackInfo>
                    <BackSlider>
                        <SliderLeft>
                            <h4>Evolución:</h4>
                        </SliderLeft>
                        <SliderRigth>
                            <img src="./img/poke-logo.png" alt="test" />
                        </SliderRigth>
                    </BackSlider>
                </CardBack>
            </InnerWrapper>
        </PokeCardContainer>
    );
};

export default PokeCard;
