import { useState, useEffect } from "react";

const useObserver = ({ pokeDetails, gotoNextPage, hasMore }) => {
    const [cardsContainer, setCardsContainer] = useState();

    useEffect(() => {
        setCardsContainer(document.getElementById("pokegrid"));
    }, [pokeDetails]);

    const setObserver = () => {
        const options = {
            threshold: 1,
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    hasMore && gotoNextPage();
                }
            });
        }, options);
        if (cardsContainer && pokeDetails.length % 20 === 0) {
            observer.observe(cardsContainer.lastElementChild);
        }
    };

    useEffect(() => {
        setObserver();
    }, [pokeDetails]);

    return { setObserver };
};

export default useObserver;
