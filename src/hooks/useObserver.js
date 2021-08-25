import { useState, useEffect } from "react";

const useObserver = ({ pokeDetails, gotoNextPage, hasMore }) => {
    const [cardsContainer, setCardsContainer] = useState();

    useEffect(() => {
        setCardsContainer(document.getElementById("pokegrid"));
    }, [pokeDetails]);

    const setObserver = () => {
        const options = {
            threshold: 0,
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    console.log(entry.target.id, entry.isIntersecting);
                    hasMore && gotoNextPage();
                }
            });
        }, options);
        cardsContainer && observer.observe(cardsContainer.lastElementChild);
    };

    useEffect(() => {
        setObserver();
    }, [pokeDetails]);

    return { setObserver };
};

export default useObserver;
