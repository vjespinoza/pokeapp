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
    const [prevPageUrl, setPrevPageUrl] = useState();
    const [loading, setLoading] = useState(true);

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
                setPrevPageUrl(res.data.previous);
                setPokemon(res.data.results);
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

    function gotoPrevPage() {
        setCurrentPageUrl(prevPageUrl);
    }

    return {
        pokeDetails,
        gotoNextPage,
        gotoPrevPage,
        loading,
    };
};

export default usePokedex;
