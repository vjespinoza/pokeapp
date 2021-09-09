import axios from "axios";

export const createCurrentPokemon = (object) => {
    let obj = object;

    class Pokemon {
        constructor(obj) {
            this.getCategory().then((res) => (this.category = res));
            this.abilities = obj.abilities;
            this.height = obj.height;
            this.id = obj.id;
            this.name = obj.name;
            this.types = obj.types;
            this.image = obj.sprites.other["official-artwork"].front_default;
            this.weight = obj.weight;
            this.category = undefined;
            this.evolutions = this.getEvolutions(); //func pokemon/species/url (evolution_chain/url)
            this.gender = this.getGender(); //func
            this.weakness = this.getWeakness(); //func
        }

        async getCategory() {
            let response = await axios.get(obj.species.url);
            return response.data.genera[7].genus;
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

    return new Pokemon(obj);
};
