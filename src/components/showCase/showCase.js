import PokeCard from "./../pokeCard/pokeCard";
import { ShowCaseContainer, PokedexGrid } from "./showCase.elements";
import { LoaderCircular } from "../shared/loader";
//Custom hook
import usePokedex from "../../hooks/usePokedex";
import useObserver from "../../hooks/useObserver";

const ShowCase = () => {
    const { pokemons, gotoNextPage, hasMore, loading } = usePokedex();

    useObserver({ gotoNextPage, hasMore, loading });

    return (
        <ShowCaseContainer>
            <PokedexGrid id="pokegrid">
                {pokemons.map((pokemon, i) => {
                    return (
                        <PokeCard
                            key={`${pokemon.name}-${i}`}
                            pokemon={pokemon}
                        />
                    );
                })}
                {loading && <LoaderCircular />}
            </PokedexGrid>
        </ShowCaseContainer>
    );
};

export default ShowCase;
