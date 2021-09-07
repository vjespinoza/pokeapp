import PokeCard from "./../pokeCard/pokeCard";
import { ShowCaseContainer, PokedexGrid } from "./showCase.elements";
//Custom hook
import usePokedex from "../../hooks/usePokedex";
import useObserver from "../../hooks/useObserver";

const ShowCase = () => {
    const { pokemons, gotoNextPage, hasMore } = usePokedex();

    // useObserver({ pokemons, gotoNextPage, hasMore });

    return (
        <ShowCaseContainer>
            <h1>Pokédex</h1>
            <PokedexGrid id="pokegrid">
                {pokemons.map((pokemon) => {
                    return (
                        <div key={pokemon.name}>
                            <span>{pokemon.name}</span>
                        </div>
                    );
                })}
                {/* {pokemons
                    .sort((a, b) => a.details.id - b.details.id)
                    .map((poke, i) => {
                        return (
                            <PokeCard key={`${poke.name}-${i}`} poke={poke} />
                        );
                    })} */}
            </PokedexGrid>
        </ShowCaseContainer>
    );
};

export default ShowCase;
