import axios from "axios";

export const createCurrentPokemon = (object) => {
    let obj = object;

    class Pokemon {
        constructor(obj) {
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
    }

    return new Pokemon(obj);
};

//Get pokemon categories *************************************************
export async function getCategory(name) {
    let response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${name}`
    );
    return response.data.genera[7].genus;
}

//Get pokemon evolutions *************************************************
export async function getEvolutions(name) {
    let response1 = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${name}`
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

    const getImages = async (arr) => {
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

        await Promise.all(reqMap).then((res) => (results = res));
        return results;
    };

    return getImages(chainObj);
}

//Get pokemon gender *************************************************
export function getGender() {
    //gender/3
    return "gender";
}

//Get pokemon weakness *************************************************
export function getWeakness() {
    //types = array => pokemon/types
    //fetch /type with types.name
    return "weakness";
}
