import axios from "axios";

export const calculateWeakness = (typeNames) => {
    let data = { a: {}, b: {} };
    typeNames.map((t, i) => {
        return axios.get(`https://pokeapi.co/api/v2/type/${t}`).then((res) => {
            if (i === 0) {
                data.a = {
                    name: res.data.name,
                    damage: {
                        double: res.data.damage_relations.double_damage_from.map(
                            (d) => {
                                return { name: d.name, value: 2 };
                            }
                        ),
                        half: res.data.damage_relations.half_damage_from.map(
                            (d) => {
                                return { name: d.name, value: 0.5 };
                            }
                        ),
                        none: res.data.damage_relations.no_damage_from.map(
                            (d) => {
                                return { name: d.name, value: 0 };
                            }
                        ),
                    },
                };
            }
            if (i === 1) {
                data.b = {
                    name: res.data.name,
                    damage: res.data.damage_relations,
                };
            }
        });
    });
    console.log(data);

    // let types = { type_A: [], type_B: [] };
    // let { type_A, type_B } = types;
    // let commonTypes = [];
    // let uncommonTypes = [...type_A, ...type_B];

    // type_A.map((x) => {
    //     type_B.map((y, i) => {
    //         if (Object.values(x).includes(Object.values(y)[0])) {
    //             commonTypes.push({ name: y.name, value: x.value * y.value });
    //             // delete uncommonTypes[i];
    //             uncommonTypes = uncommonTypes.filter((z) => {
    //                 return z.name !== x.name;
    //             });
    //         }
    //     });
    // });

    // let weakness = [...commonTypes, ...uncommonTypes].filter((w) => {
    //     return w.value >= 2;
    // });

    // console.table(weakness);
    // return weakness;
};
