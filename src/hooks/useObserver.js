import { useState, useEffect } from "react";

const useObserver = ({ pokemons, gotoNextPage, hasMore, loading }) => {
    const [cardsContainer, setCardsContainer] = useState();

    useEffect(() => {
        setCardsContainer(document.getElementById("pokegrid"));
        // console.log(document.getElementById("pokegrid"));
    }, [loading]);

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
            console.log(cardsContainer.lastElementChild);
            observer.observe(cardsContainer.lastElementChild);
        }
    };

    useEffect(() => {
        setObserver();
    }, [pokemons]);

    return { setObserver };
};

export default useObserver;
