import { useState, useEffect } from "react";
import axios from "axios";
//helpers
import {
    createCurrentPokemon,
    getCategory,
    getEvolutions,
    getGender,
    getWeakness,
} from "../utils/createCurrentPokemon";

const usePokedex = () => {
    const [pokemons, setPokemons] = useState([]);
    const [currentPageUrl, setCurrentPageUrl] = useState(
        "https://pokeapi.co/api/v2/pokemon"
    );
    const [nextPageUrl, setNextPageUrl] = useState();
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(true);

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
                let pokes = [];
                let reqMap = baseData.map(async (d) => {
                    let reqs = axios.get(d.url).then((res) => {
                        let obj = createCurrentPokemon(res.data);
                        return obj;
                    });
                    return reqs;
                });

                await Promise.all(reqMap).then((res) => {
                    res.forEach((r) => pokes.push(r));
                });
                return pokes;
            })
            .then(async (pokes) => {
                let result = pokes.map(async (poke) => {
                    let name = poke.name;
                    let types = poke.types;
                    let pokeObj = poke;

                    await getCategory(name).then(
                        (res) => (pokeObj.category = res)
                    );

                    await getEvolutions(name).then(
                        (res) => (pokeObj.evolutions = res)
                    );

                    await getGender(name).then((res) => (pokeObj.gender = res));

                    await getWeakness(types).then(
                        (res) => (pokeObj.weakness = res)
                    );

                    return pokeObj;
                });

                await Promise.all(result).then((res) =>
                    setPokemons([...pokemons, ...res])
                );
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [currentPageUrl]);

    const gotoNextPage = () => {
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
