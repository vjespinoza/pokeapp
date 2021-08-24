import { useState, useEffect } from "react";

const useObserver = (pokeDetails) => {
    const [pokecards, setPokecards] = useState([]);

    useEffect(() => {
        let x = pokeDetails && document.querySelectorAll("[data-pokecard]");
        setPokecards(Array.from(x));
    }, [pokeDetails]);

    let options = {};

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            console.log(entry);
        });
    }, options);

    console.log(observer);

    pokecards.forEach((card) => {
        observer.observe(card);
    });
};

export default useObserver;
