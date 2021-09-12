import { useState, useEffect } from "react";
import axios from "axios";
//helpers
import { createCurrentPokemon } from "../utils/createCurrentPokemon";

const usePokedex = () => {
    const [pokemons, setPokemons] = useState([]);
    const [currentPageUrl, setCurrentPageUrl] = useState(
        "https://pokeapi.co/api/v2/pokemon"
    );
    const [nextPageUrl, setNextPageUrl] = useState(undefined);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        axios
            .get(currentPageUrl)
            .then((res) => {
                res && setNextPageUrl(res.data.next);
                if (!res.data.next) {
                    setHasMore(false);
                }
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
                console.log(results);
                setPokemons([...pokemons, ...results]);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [currentPageUrl]);

    const gotoNextPage = () => {
        console.log(nextPageUrl);
        setCurrentPageUrl(nextPageUrl);
    };

    return {
        pokemons,
        gotoNextPage,
        hasMore,
        loading,
    };
};

export default usePokedex;
