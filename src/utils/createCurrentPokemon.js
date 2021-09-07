import axios from "axios";

class Pokemon {
    constructor(obj) {
        this.abilities = obj.abilities; //pokemon/abilities
        this.height = obj.height; //pokemon/height
        this.id = obj.id; //pokemon/id
        this.name = obj.name; //pokemon/name
        this.types = obj.types; //pokemon/types
        this.image = obj.image; //pokemon/sprites/other/official-artwork/front_default
        this.weight = obj.weight; //pokemon/weight
        this.category = this.getCategory(); // func pokemon/species/url (genera/genus)
        this.evolutions = this.getEvolutions(); //func pokemon/species/url (evolution_chain/url)
        this.gender = this.getGender(); //func
        this.weakness = this.getWeakness(); //func
    }

    getCategory() {
        //fetch url
        return "category";
    }

    getEvolutions() {
        //fetch url
        return "evolutions";
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

export const createCurrentPokemon = (arr) => {
    let qqq = arr.map(async (item) => {
        return axios.get(item.url).then((res) => {
            let poke = {
                abilities: res.data.abilities.map((a) => a.ability.name),
                height: res.data.height,
                id: res.data.id,
                name: res.data.name,
                types: res.data.types.map((t) => t.type.name),
                image: res.data.sprites.other["official-artwork"].front_default,
                weight: res.data.weight,
            };
            let pokeObj = new Pokemon(poke);
            return pokeObj;
        });
    });

    return qqq;
};

// const leFunc = async (promise) => {
//     let res = await promise;
//     console.log(res);
// };
