import PokeCard from "./../pokeCard/pokeCard";
import { ShowCaseContainer, PokedexGrid } from "./showCase.elements";
//Custom hook
import useFetchApi from "../../hooks/useFetchApi";
import usePokedex from "../../hooks/usePokedex";

const ShowCase = () => {
    const { getRequest, fetchData } = useFetchApi({
        url: "https://pokeapi.co/api/v2/pokemon/",
    });

    const { pokeData } = usePokedex({ getRequest, fetchData });

    return (
        <ShowCaseContainer>
            <h1>Pokédex</h1>
            <PokedexGrid>
                {pokeData
                    .sort((a, b) => a.id - b.id)
                    .map((poke, i) => {
                        return (
                            <PokeCard key={`${poke.name}-${i}`} poke={poke} />
                        );
                    })}
            </PokedexGrid>
        </ShowCaseContainer>
    );
};

export default ShowCase;
