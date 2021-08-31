import { useState, useEffect } from "react";
import axios from "axios";

const usePokedex = () => {
    const [pokemon, setPokemon] = useState([]);
    const [currentPokemon, setCurrentPokemon] = useState({});
    const [pokeDetails, setPokeDetails] = useState([]);
    const [currentPageUrl, setCurrentPageUrl] = useState(
        "https://pokeapi.co/api/v2/pokemon"
    );
    const [nextPageUrl, setNextPageUrl] = useState();
    const [loading, setLoading] = useState(true);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        setLoading(true);
        let cancel;
        axios
            .get(currentPageUrl, {
                cancelToken: new axios.CancelToken((c) => (cancel = c)),
            })
            .then((res) => {
                setLoading(false);
                setNextPageUrl(res.data.next);
                setPokemon(res.data.results);
                if (!res.data.next) {
                    setHasMore(false);
                }
            })
            .catch((e) => {
                if (axios.isCancel(e)) return;
            });

        return () => cancel();
    }, [currentPageUrl]);

    useEffect(() => {
        //Gets pokemon details
        pokemon.forEach((p) => {
            let url1 = p.url;
            let url2 = `https://pokeapi.co/api/v2/pokemon-species/${p.name}`;
            let url3 = `https://pokeapi.co/api/v2/gender/3/`;

            let req1 = axios.get(url1);
            let req2 = axios.get(url2);
            let req3 = axios.get(url3);

            axios
                .all([req1, req2, req3])
                .then(
                    axios.spread((...responses) => {
                        const res1 = responses[0];
                        const res2 = responses[1];
                        const res3 = responses[2];

                        let gender = true;
                        res3.data.pokemon_species_details.map((g) => {
                            if (g.pokemon_species.name === res1.data.name) {
                                gender = false;
                            }
                        });

                        setCurrentPokemon({
                            details: res1.data,
                            category: res2.data.genera[7].genus,
                            gender: gender,
                        });
                    })
                )
                .catch((e) => console.log(e));
        });
    }, [pokemon]);

    useEffect(() => {
        Object.entries(currentPokemon).length > 0 &&
            setPokeDetails([...pokeDetails, currentPokemon]);
    }, [currentPokemon]);

    function gotoNextPage() {
        setCurrentPageUrl(nextPageUrl);
    }

    return {
        pokeDetails,
        gotoNextPage,
        loading,
        hasMore,
    };
};

export default usePokedex;
