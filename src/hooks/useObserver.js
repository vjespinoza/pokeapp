import { useState, useEffect } from "react";

const useObserver = ({ pokeDetails, gotoNextPage, hasMore }) => {
    const [cardsContainer, setCardsContainer] = useState();

    useEffect(() => {
        setCardsContainer(document.getElementById("pokegrid"));
    }, [pokeDetails]);

    const setObserver = () => {
        const options = {
            threshold: 0.75,
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.setAttribute("style", "background: red");
                    hasMore && gotoNextPage();
                }
            });
        }, options);
        cardsContainer && observer.observe(cardsContainer.lastElementChild);
    };

    useEffect(() => {
        pokeDetails.length >= 20 && setObserver();
    }, [pokeDetails]);

    return { setObserver };
};

export default useObserver;
