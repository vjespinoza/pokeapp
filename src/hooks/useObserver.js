import { useState, useEffect } from "react";

const useObserver = ({ pokemons, gotoNextPage, hasMore }) => {
    const [cardsContainer, setCardsContainer] = useState();

    useEffect(() => {
        setCardsContainer(document.getElementById("pokegrid"));
    }, []);

    const setObserver = () => {
        const options = {
            threshold: 1,
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.setAttribute("style", "background: red");
                    console.log(entry.target);
                    hasMore && gotoNextPage();
                }
            });
        }, options);
        if (cardsContainer && pokemons.length % 20 === 0) {
            observer.observe(cardsContainer.lastElementChild);
        }
    };

    useEffect(() => {
        setObserver();
    }, [pokemons]);

    return { setObserver };
};

export default useObserver;
