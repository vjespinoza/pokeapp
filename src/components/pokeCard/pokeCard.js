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
    NoEvolution,
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

const PokeCard = ({ pokemon, loading }) => {
    const [flipCard, setFlipCard] = useState(false);
    const [counter, setCounter] = useState(0);

    const handleFlipcard = () => {
        setFlipCard((flipCard) => !flipCard);
    };

    const handleSlider = (e) => {
        let action = e.currentTarget.dataset.action;

        if (action === "r") {
            setCounter((counter) => counter + 1);
        } else {
            setCounter((counter) => counter - 1);
        }
    };

    return (
        <PokeCardContainer id={pokemon.name}>
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
                                                    pokemon.types[0].type.name
                                                )}
                                                id={parseInt(pokemon.id)}
                                            />
                                            <path
                                                fill={`url(#grad${pokemon.id})`}
                                                d="M26.5,-13.5C32.4,9.4,33.7,28.9,25,35.5C16.2,42.1,-2.7,36,-20,24.2C-37.2,12.4,-52.8,-4.9,-49.2,-24.7C-45.6,-44.5,-22.8,-66.8,-6.2,-64.8C10.3,-62.8,20.7,-36.4,26.5,-13.5Z"
                                                transform="translate(100 100)"
                                            />
                                        </svg>
                                    </div>
                                    <div className="image">
                                        <img
                                            src={pokemon.image}
                                            alt={pokemon.name}
                                        ></img>
                                    </div>
                                </div>
                            </ImageWrapper>
                            <InfoWrapper>
                                <p className="poke-number">{`#${pokemon.id
                                    .toString()
                                    .padStart(3, "0")}`}</p>
                                <h2 className="poke-name">{pokemon.name}</h2>
                                <div className="type-wrapper">
                                    <h4 className="poke-types">Tipos:</h4>
                                    <ul className="poke-list">
                                        {pokemon.types.map((type, i) => {
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
                                    {pokemon.weakness}
                                    {/* {weakness.map((w, i) => {
                                        return (
                                            <Chip
                                                key={i}
                                                name={w.name}
                                                colors={colorizer(w.name)}
                                            />
                                        );
                                    })} */}
                                </div>
                                <h4>Habilidades:</h4>
                                <ul className="poke-list">
                                    {pokemon.abilities.map((ability, i) => {
                                        return (
                                            <li key={i}>
                                                {ability.ability.name}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </BackInfoLeft>
                            <BackInfoRight>
                                <h4>Dimensiones:</h4>
                                <p>
                                    {pokemon.height / 10} m /{" "}
                                    {pokemon.weight / 10} kg
                                </p>
                                <h4>Sexo:</h4>
                                {pokemon.gender}
                                {/* {poke.gender ? (
                                    <div>
                                        <GenderMale size="16" />{" "}
                                        <GenderFemale size="16" />
                                    </div>
                                ) : (
                                    "Indefinido"
                                )} */}
                                <h4>Categoria:</h4>
                                <p>
                                    {pokemon.category &&
                                        pokemon.category
                                            .slice(
                                                0,
                                                pokemon.category.indexOf(
                                                    "Pokémon"
                                                )
                                            )
                                            .trim()}
                                </p>
                            </BackInfoRight>
                            <BackSlider>
                                <h4>Evolución:</h4>
                                <Slider>
                                    {pokemon.evolutions}
                                    {/* {filterEvols.length >= 1 ? (
                                        <img
                                            src={filterEvols[counter].url}
                                            alt={filterEvols[counter].name}
                                        />
                                    ) : (
                                        <NoEvolution>
                                            <p>Este Pokémon no evoluciona</p>
                                            <img
                                                src={
                                                    poke.details.sprites.other[
                                                        "official-artwork"
                                                    ].front_default
                                                }
                                                alt={poke.details.name}
                                            />
                                        </NoEvolution>
                                    )}
                                    <SliderControls>
                                        <SliderAction
                                            noMargin
                                            data-action="l"
                                            toggle={
                                                evolutions.length === 1 ||
                                                counter === 0
                                                    ? false
                                                    : true
                                            }
                                            onClick={(e) => handleSlider(e)}
                                        >
                                            <ChevronLeft
                                                className="left"
                                                size="20"
                                            />
                                        </SliderAction>
                                        <SliderAction
                                            noMargin
                                            data-action="r"
                                            toggle={
                                                evolutions.length === 1 ||
                                                counter ===
                                                    filterEvols.length - 1
                                                    ? false
                                                    : true
                                            }
                                            onClick={(e) => handleSlider(e)}
                                        >
                                            <ChevronRight
                                                className="right"
                                                size="20"
                                            />
                                        </SliderAction>
                                    </SliderControls> */}
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
