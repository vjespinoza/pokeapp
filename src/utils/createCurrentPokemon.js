import axios from "axios";

export const createCurrentPokemon = (object) => {
    let obj = object;

    class Pokemon {
        constructor(obj) {
            this.getCategory().then((res) => (this.category = res));
            this.getEvolutions().then((res) => (this.evolutions = res));
            this.abilities = obj.abilities;
            this.height = obj.height;
            this.id = obj.id;
            this.name = obj.name;
            this.types = obj.types;
            this.image = obj.sprites.other["official-artwork"].front_default;
            this.weight = obj.weight;
            this.category = undefined;
            this.evolutions = undefined; //func pokemon/species/url (evolution_chain/url)
            this.gender = undefined; //func
            this.weakness = undefined; //func
        }

        async getCategory() {
            let response = await axios.get(obj.species.url);
            return response.data.genera[7].genus;
        }

        async getEvolutions() {
            let response1 = await axios.get(
                `https://pokeapi.co/api/v2/pokemon-species/${obj.name}`
            );
            let response2 = await axios.get(response1.data.evolution_chain.url);

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
                    return finalResults;
                };
                return getObject(targetObj);
            };

            let chainObj = findObjects(response2.data, "species");

            const getImages = (arr) => {
                let results = [];
                let reqMap = arr.map((r) => {
                    let reqs = axios
                        .get(`https://pokeapi.co/api/v2/pokemon/${r.name}`)
                        .then((res) => {
                            let obj = {
                                id: res.data.id,
                                name: res.data.name,
                                url: res.data.sprites.other["official-artwork"]
                                    .front_default,
                            };
                            return obj;
                        });
                    return reqs;
                });

                Promise.all(reqMap).then((res) => results.push(res));
                return results;
            };

            return getImages(chainObj);
        }

        getGender() {
            //gender/3
            return "gender";
        }

        getWeakness() {
            //types = array => pokemon/types
            //fetch /type with types.name
            return "weakness";
        }
    }

    return new Pokemon(obj);
};
