import data from "./../../data/db.json";
import PokeCard from "./../pokeCard/pokeCard";
import { ShowCaseContainer, PokedexGrid } from "./showCase.elements";

const ShowCase = () => {
    return (
        <ShowCaseContainer>
            <h1>Pokédex</h1>
            <PokedexGrid>
                {data.map((card, index) => {
                    return (
                        <PokeCard key={`${card.name}-${index}`} card={card} />
                    );
                })}
            </PokedexGrid>
        </ShowCaseContainer>
    );
};

export default ShowCase;
