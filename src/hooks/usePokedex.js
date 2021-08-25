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
        pokemon.map((p) => {
            return axios.get(p.url).then((res) => {
                setCurrentPokemon(res.data);
            });
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
