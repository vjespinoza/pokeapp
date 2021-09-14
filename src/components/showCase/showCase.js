import PokeCard from "./../pokeCard/pokeCard";
import { ShowCaseContainer, PokedexGrid } from "./showCase.elements";
//Custom hook
import usePokedex from "../../hooks/usePokedex";
import useObserver from "../../hooks/useObserver";

const ShowCase = () => {
    const { pokemons, gotoNextPage, hasMore } = usePokedex();

    useObserver({ pokemons, gotoNextPage, hasMore });

    return (
        <ShowCaseContainer>
            <h1>Pokédex</h1>
            <PokedexGrid id="pokegrid">
                {pokemons.map((pokemon, i) => {
                    return (
                        <PokeCard
                            key={`${pokemon.name}-${i}`}
                            pokemon={pokemon}
                            pokemons={pokemons}
                        />
                    );
                })}
            </PokedexGrid>
        </ShowCaseContainer>
    );
};

export default ShowCase;
