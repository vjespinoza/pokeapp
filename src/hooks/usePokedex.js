import { useState, useEffect } from "react";
import axios from "axios";
//helpers
import { createCurrentPokemon } from "../utils/createCurrentPokemon";

const usePokedex = () => {
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
            .then(async (baseData) => {
                let results = [];
                let reqMap = baseData.map(async (d) => {
                    let reqs = axios.get(d.url).then((res) => {
                        let obj = createCurrentPokemon(res.data);
                        return obj;
                    });
                    return reqs;
                });

                await Promise.all(reqMap).then((res) => {
                    results = res;
                });
                setPokemons(results);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [currentPageUrl]);

    return {
        pokemons,
        gotoNextPage,
        hasMore,
        loading,
    };
};

export default usePokedex;
