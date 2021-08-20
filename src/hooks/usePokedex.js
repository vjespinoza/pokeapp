import { useState, useEffect } from "react";

const usePokedex = ({ getRequest, fetchData }) => {
    const [pokeData, setPokeData] = useState([]);

    const getRandomPokes = (count) => {
        for (let i = 0; i < count; i++) {
            getRequest(Math.floor(Math.random() * 897) + 1);
        }
    };

    useEffect(() => {
        getRandomPokes(12);
    }, []);

    useEffect(() => {
        fetchData && setPokeData([...pokeData, fetchData]);
    }, [fetchData]);

    return { pokeData };
};

export default usePokedex;
