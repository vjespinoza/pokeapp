import { useEffect, useState } from "react";
import axios from "axios";

const useCalcWeakness = (data) => {
    const [weakness, setWeakness] = useState([]);

    useEffect(() => {
        let damage = { type_a: [], type_b: [] };
        data.map((d, i) => {
            return axios
                .get(`https://pokeapi.co/api/v2/type/${d.type.name}`)
                .then((res) => {
                    if (i === 0) {
                        res.data.damage_relations.double_damage_from.map((d) =>
                            damage.type_a.push({
                                name: d.name,
                                value: 2,
                            })
                        );
                        res.data.damage_relations.half_damage_from.map((d) =>
                            damage.type_a.push({
                                name: d.name,
                                value: 0.5,
                            })
                        );
                        res.data.damage_relations.no_damage_from.map((d) =>
                            damage.type_a.push({
                                name: d.name,
                                value: 0,
                            })
                        );
                    }
                    if (i === 1) {
                        res.data.damage_relations.double_damage_from.map((d) =>
                            damage.type_b.push({
                                name: d.name,
                                value: 2,
                            })
                        );
                        res.data.damage_relations.half_damage_from.map((d) =>
                            damage.type_b.push({
                                name: d.name,
                                value: 0.5,
                            })
                        );
                        res.data.damage_relations.no_damage_from.map((d) =>
                            damage.type_b.push({
                                name: d.name,
                                value: 0,
                            })
                        );
                    }
                    return damage;
                })
                .then((damage) => {
                    let { type_a, type_b } = damage;

                    let commonTypes = [];
                    let uncommonTypes = [...type_a, ...type_b];
                    type_a.map((x) => {
                        type_b.map((y, i) => {
                            if (
                                Object.values(x).includes(Object.values(y)[0])
                            ) {
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
                    let weaks = [...commonTypes, ...uncommonTypes].filter(
                        (w) => {
                            return w.value >= 2;
                        }
                    );
                    setWeakness(weaks);
                    return weaks;
                });
        });
    }, [data]);

    return { weakness };
};

export default useCalcWeakness;
