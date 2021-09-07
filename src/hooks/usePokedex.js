import { useState, useEffect } from "react";
import axios from "axios";
//helpers
import { createCurrentPokemon } from "../utils/createCurrentPokemon";

const usePokedex = () => {
    const [currentPokemon, setCurrentPokemon] = useState({});
    const [pokemons, setPokemons] = useState([]);
    const [currentPageUrl, setCurrentPageUrl] = useState(
        "https://pokeapi.co/api/v2/pokemon"
    );
    const [nextPageUrl, setNextPageUrl] = useState();
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);

    const gotoNextPage = () => {
        setCurrentPageUrl(nextPageUrl);
    };

    useEffect(() => {
        setLoading(true);

        axios
            .get(currentPageUrl)
            .then((res) => {
                //Array containing pokemon name and url from main endpoint (/pokemon)
                let baseData = res.data.results;
                return baseData;
            })
            .then((baseData) => {
                let poke = createCurrentPokemon(baseData);
                console.log(poke);
                // console.log(poke[0]);
            });
    }, [currentPageUrl]);

    return {
        pokemons,
        gotoNextPage,
        hasMore,
    };
};

export default usePokedex;
