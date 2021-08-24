import PokeCard from "./../pokeCard/pokeCard";
import { ShowCaseContainer, PokedexGrid } from "./showCase.elements";
//Custom hook
import usePokedex from "../../hooks/usePokedex";

const ShowCase = () => {
    const { pokeDetails, gotoNextPage, gotoPrevPage, loading } = usePokedex();

    return (
        <ShowCaseContainer>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <h1>Pokédex</h1>
                    <button onClick={gotoPrevPage}>Prev</button>
                    <button onClick={gotoNextPage}>Next</button>
                    <PokedexGrid>
                        {pokeDetails
                            .sort((a, b) => a.id - b.id)
                            .map((poke, i) => {
                                return (
                                    <PokeCard
                                        key={`${poke.name}-${i}`}
                                        poke={poke}
                                    />
                                );
                            })}
                    </PokedexGrid>
                </>
            )}
        </ShowCaseContainer>
    );
};

export default ShowCase;
