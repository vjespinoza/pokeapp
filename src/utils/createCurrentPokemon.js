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
            this.evolutions = undefined;
            this.gender = undefined;
            this.weakness = undefined;
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
export async function getGender(name) {
    let req1 = axios.get("https://pokeapi.co/api/v2/gender/1");
    let req2 = axios.get("https://pokeapi.co/api/v2/gender/2");
    let req3 = axios.get("https://pokeapi.co/api/v2/gender/3");

    let gender = {};

    let reqs = axios.all([req1, req2, req3]).then(
        axios.spread((...responses) => {
            let res1 = responses[0].data.pokemon_species_details;
            let res2 = responses[1].data.pokemon_species_details;
            let res3 = responses[2].data.pokemon_species_details;

            gender.female = res1.find((x) =>
                x.pokemon_species.name.includes(name)
            )
                ? true
                : false;
            gender.male = res2.find((x) =>
                x.pokemon_species.name.includes(name)
            )
                ? true
                : false;
            gender.none = res3.find((x) =>
                x.pokemon_species.name.includes(name)
            )
                ? true
                : false;
        })
    );

    return gender;
}

//Get pokemon weakness *************************************************

export async function getWeakness(arr) {
    class Damage {
        constructor(name, value) {
            this.name = name;
            this.value = value;
        }
    }

    let damageByType = { 0: [], 1: [] };

    let reqMap = arr.map(async (t) => {
        let reqs = axios
            .get(`https://pokeapi.co/api/v2/type/${t.type.name}`)
            .then((res) => res.data.damage_relations);
        return reqs;
    });

    await Promise.all(reqMap).then((res) => {
        res.forEach((damage, i) => {
            damage.double_damage_from.forEach((d) => {
                damageByType[i].push(new Damage(d.name, 2));
            });

            damage.half_damage_from.forEach((d) => {
                damageByType[i].push(new Damage(d.name, 0.5));
            });

            damage.no_damage_from.forEach((d) => {
                damageByType[i].push(new Damage(d.name, 0));
            });
        });
    });

    const calculateWeakness = (obj) => {
        let { 0: type_a, 1: type_b } = obj;

        let commonTypes = [];
        let uncommonTypes = [...type_a, ...type_b];
        type_a.map((x) => {
            type_b.map((y, i) => {
                if (Object.values(x).includes(Object.values(y)[0])) {
                    commonTypes.push({
                        name: y.name,
                        value: x.value * y.value,
                    });
                    uncommonTypes = uncommonTypes.filter((z) => {
                        return z.name !== x.name;
                    });
                }
            });
        });
        let weaks = [...commonTypes, ...uncommonTypes].filter((w) => {
            return w.value >= 2;
        });
        return weaks;
    };

    return calculateWeakness(damageByType);
}
