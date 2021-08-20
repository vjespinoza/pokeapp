import { useState, useEffect } from "react";
import data from "./../../data/db.json";
import PokeCard from "./../pokeCard/pokeCard";
import { ShowCaseContainer, PokedexGrid } from "./showCase.elements";
//Custom hook
import useFetchApi from "../../hooks/useFetchApi";

const ShowCase = () => {
    const [pokeData, setPokeData] = useState([]);

    const { getRequest, fetchData } = useFetchApi({
        url: "https://pokeapi.co/api/v2/pokemon/",
    });

    // useEffect(() => {
    //     getRequest("");
    // }, []);

    // fetchData && setPokeData(fetchData.results);
    // console.log(pokeData);

    return (
        <ShowCaseContainer>
            <h1>Pokédex</h1>
            <PokedexGrid>
                {data.map((card, index) => {
                    return (
                        <PokeCard key={`${card.name}-${index}`} card={card} />
                    );
                })}
            </PokedexGrid>
        </ShowCaseContainer>
    );
};

export default ShowCase;
