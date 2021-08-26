import PokeCard from "./../pokeCard/pokeCard";
import {
    ShowCaseContainer,
    PokedexGrid,
    CardLoader,
} from "./showCase.elements";
//Custom hook
import usePokedex from "../../hooks/usePokedex";
import useObserver from "../../hooks/useObserver";

const ShowCase = () => {
    const { pokeDetails, gotoNextPage, loading, hasMore } = usePokedex();

    // console.log(pokeDetails);

    useObserver({ pokeDetails, gotoNextPage, hasMore });

    return (
        <ShowCaseContainer>
            <h1>Pokédex</h1>
            <PokedexGrid id="pokegrid">
                {pokeDetails
                    .sort((a, b) => a.details.id - b.details.id)
                    .map((poke, i) => {
                        return (
                            <PokeCard key={`${poke.name}-${i}`} poke={poke} />
                        );
                    })}
                {loading && <CardLoader />}
            </PokedexGrid>
        </ShowCaseContainer>
    );
};

export default ShowCase;
