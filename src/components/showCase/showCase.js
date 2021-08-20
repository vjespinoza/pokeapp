import data from "./../../data/db.json";
import PokeCard from "./../pokeCard/pokeCard";
import { ShowCaseContainer, PokedexGrid } from "./showCase.elements";
//Custom hook
import useFetchApi from "../../hooks/useFetchApi";
import usePokedex from "../../hooks/usePokedex";

const ShowCase = ({ auth }) => {
    const { getRequest, fetchData } = useFetchApi({
        url: "https://pokeapi.co/api/v2/pokemon/",
    });

    const { pokeData } = usePokedex({ getRequest, fetchData });

    console.log(pokeData);

    return (
        <ShowCaseContainer>
            <h1>Pokédex</h1>
            <PokedexGrid>
                {/* {data.map((card, index) => {
                    return (
                        <PokeCard key={`${card.name}-${index}`} card={card} />
                    );
                })} */}

                {/* <div>
                    <p>{pokeData.id}</p>
                    <p>{`#${pokeData.id.toString().padStart(3, "0")}`}</p>
                </div> */}
                {pokeData.map((poke, i) => {
                    return (
                        <PokeCard key={`${poke.name}-${i}`} poke={poke}>
                            <p>{poke.name}</p>
                            <p>{`#${poke.id.toString().padStart(3, "0")}`}</p>
                            <ul>
                                {poke.types.map((type, i) => {
                                    return <li key={i}>{type.type.name}</li>;
                                })}
                            </ul>
                            <img
                                src={
                                    poke.sprites.other["official-artwork"]
                                        .front_default
                                }
                                alt={poke.name}
                            />
                        </PokeCard>
                    );
                })}
            </PokedexGrid>
        </ShowCaseContainer>
    );
};

export default ShowCase;
