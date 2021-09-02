import { useState } from "react";
import {
    PokeCardContainer,
    InnerWrapper,
    ImageWrapper,
    InfoWrapper,
    CardFront,
    CardBack,
    BackInfoLeft,
    BackInfoRight,
    BackSlider,
    Slider,
    SliderControls,
    SliderAction,
} from "./pokeCard.elements";
import SvgGradient from "./svgGradient";
import Chip from "../shared/chip";
import { Loader } from "../shared/loader";
import { colorizer } from "../../utils/colorizer";
import {
    X,
    GenderMale,
    GenderFemale,
    ChevronLeft,
    ChevronRight,
} from "@styled-icons/bootstrap";
import useCalcWeakness from "../../hooks/useCalcWeakness";
import useEvolutions from "../../hooks/useEvolutions";

const PokeCard = ({ poke }) => {
    const [flipCard, setFlipCard] = useState(false);
    const [counter, setCounter] = useState(0);

    const handleFlipcard = () => {
        setFlipCard((flipCard) => !flipCard);
    };

    const { weakness } = useCalcWeakness(poke.details.types);

    const { evolutions, loading } = useEvolutions({
        data: poke.details.species.url,
    });

    const handleSlider = (e) => {
        let action = e.currentTarget.dataset.action;

        if (action === "r") {
            setCounter((counter) => counter + 1);
        } else {
            setCounter((counter) => counter - 1);
        }
    };

    return (
        <PokeCardContainer id={poke.details.name}>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <InnerWrapper flipCard={flipCard}>
                        <CardFront
                            flipCard={flipCard}
                            onClick={loading ? null : handleFlipcard}
                        >
                            <ImageWrapper>
                                <div className="overflow">
                                    <div className="blob">
                                        <svg
                                            viewBox="0 0 200 200"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <SvgGradient
                                                colors={colorizer(
                                                    poke.details.types[0].type
                                                        .name
                                                )}
                                                id={parseInt(poke.details.id)}
                                            />
                                            <path
                                                fill={`url(#grad${poke.details.id})`}
                                                d="M26.5,-13.5C32.4,9.4,33.7,28.9,25,35.5C16.2,42.1,-2.7,36,-20,24.2C-37.2,12.4,-52.8,-4.9,-49.2,-24.7C-45.6,-44.5,-22.8,-66.8,-6.2,-64.8C10.3,-62.8,20.7,-36.4,26.5,-13.5Z"
                                                transform="translate(100 100)"
                                            />
                                        </svg>
                                    </div>
                                    <div className="image">
                                        <img
                                            src={
                                                poke.details.sprites.other[
                                                    "official-artwork"
                                                ].front_default
                                            }
                                            alt={poke.details.name}
                                        ></img>
                                    </div>
                                </div>
                            </ImageWrapper>
                            <InfoWrapper>
                                <p className="poke-number">{`#${poke.details.id
                                    .toString()
                                    .padStart(3, "0")}`}</p>
                                <h2 className="poke-name">
                                    {poke.details.name}
                                </h2>
                                <div className="type-wrapper">
                                    <h4 className="poke-types">Tipos:</h4>
                                    <ul className="poke-list">
                                        {poke.details.types.map((type, i) => {
                                            return (
                                                <li key={i}>
                                                    <Chip
                                                        name={type.type.name}
                                                        colors={colorizer(
                                                            type.type.name
                                                        )}
                                                    />
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </InfoWrapper>
                        </CardFront>
                        <CardBack flipCard={flipCard}>
                            <span
                                className="closeCard"
                                onClick={handleFlipcard}
                            >
                                <X size="18" />
                            </span>
                            <BackInfoLeft>
                                <h4>Debilidades:</h4>
                                <div className="weakness-list">
                                    {weakness.map((w, i) => {
                                        return (
                                            <Chip
                                                key={i}
                                                name={w.name}
                                                colors={colorizer(w.name)}
                                            />
                                        );
                                    })}
                                </div>
                                <h4>Habilidades:</h4>
                                <ul className="poke-list">
                                    {poke.details.abilities.map(
                                        (ability, i) => {
                                            return (
                                                <li key={i}>
                                                    {ability.ability.name}
                                                </li>
                                            );
                                        }
                                    )}
                                </ul>
                            </BackInfoLeft>
                            <BackInfoRight>
                                <h4>Dimensiones:</h4>
                                <p>
                                    {poke.details.height / 10} m /{" "}
                                    {poke.details.weight / 10} kg
                                </p>
                                <h4>Sexo:</h4>
                                {poke.gender ? (
                                    <div>
                                        <GenderMale size="16" />{" "}
                                        <GenderFemale size="16" />
                                    </div>
                                ) : (
                                    "Indefinido"
                                )}
                                <h4>Categoria:</h4>
                                <p>
                                    {poke.category
                                        .slice(
                                            0,
                                            poke.category.indexOf("Pokémon")
                                        )
                                        .trim()}
                                </p>
                            </BackInfoRight>
                            <BackSlider>
                                <h4>Evolución:</h4>
                                <Slider>
                                    <img
                                        src={evolutions[counter]}
                                        alt="pokemon evolution"
                                    />
                                    <SliderControls>
                                        <SliderAction
                                            noMargin
                                            data-action="l"
                                            toggle={
                                                counter === 0 ? false : true
                                            }
                                            onClick={(e) => handleSlider(e)}
                                        >
                                            <ChevronLeft size="20" />
                                        </SliderAction>
                                        <SliderAction
                                            noMargin
                                            data-action="r"
                                            toggle={
                                                counter ===
                                                evolutions.length - 1
                                                    ? false
                                                    : true
                                            }
                                            onClick={(e) => handleSlider(e)}
                                        >
                                            <ChevronRight size="20" />
                                        </SliderAction>
                                    </SliderControls>
                                </Slider>
                            </BackSlider>
                        </CardBack>
                    </InnerWrapper>
                </>
            )}
        </PokeCardContainer>
    );
};

export default PokeCard;
