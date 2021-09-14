import { useState, useEffect } from "react";

const useObserver = ({ gotoNextPage, hasMore, loading }) => {
    const [nodes, setNodes] = useState();

    useEffect(() => {
        !loading &&
            setNodes(
                Array.from(document.querySelectorAll("[data-name='pokecard']"))
            );
    }, [loading]);

    useEffect(() => {
        const options = {
            threshold: 1,
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // entry.target.setAttribute("style", "background: red");
                    //console.log(entry.target);
                    hasMore && gotoNextPage();
                }
            });
        }, options);
        if (nodes) {
            observer.observe(nodes[nodes.length - 1]);
        }
    }, [nodes]);

    return true;
};

export default useObserver;
