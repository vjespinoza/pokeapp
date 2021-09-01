import { useEffect, useState } from "react";
import axios from "axios";

const useEvolutions = (data) => {
    const [evoUrl, setEvoUrl] = useState([]);
    //Array of img urls => sprites.other["official-artwork"].front_default
    const [evolutions, setEvolutions] = useState([]);

    useEffect(() => {
        axios
            .get(data)
            .then((res) => {
                let chainURL = res.data.evolution_chain.url;
                return chainURL;
            })
            .then((chainURL) => {
                axios.get(chainURL).then((res) => {
                    const findObjects = (targetObj, targetProp) => {
                        let finalResults = [];
                        const getObject = (obj) => {
                            if (obj instanceof Array) {
                                for (let i = 0; i < obj.length; i++) {
                                    getObject(obj[i]);
                                }
                            } else {
                                for (let prop in obj) {
                                    if (obj.hasOwnProperty(prop)) {
                                        if (prop === targetProp) {
                                            finalResults.push(obj[prop]);
                                        }
                                        if (
                                            obj[prop] instanceof Object ||
                                            obj[prop] instanceof Array
                                        ) {
                                            getObject(obj[prop]);
                                        }
                                    }
                                }
                            }
                            return finalResults.sort((a, b) => {
                                if (a.url < b.url) {
                                    return -1;
                                }

                                if (a.url > b.url) {
                                    return 1;
                                }

                                return 0;
                            });
                        };

                        return getObject(targetObj);
                    };

                    let result = findObjects(res.data, "species");
                    setEvoUrl(result);
                });
                return evoUrl;
            })
            .then((evoUrl) => {
                console.log(evoUrl);
            });
    }, []);

    return { evolutions };
};

export default useEvolutions;
