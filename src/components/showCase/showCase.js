import data from "./../../data/db.json";
import PokeCard from "./../pokeCard/pokeCard";
import { ShowCaseContainer } from "./showCase.elements";

const ShowCase = () => {
    return (
        <ShowCaseContainer>
            {data.map((card, index) => {
                return <PokeCard key={`${card.name}-${index}`} card={card} />;
            })}
        </ShowCaseContainer>
    );
};

export default ShowCase;
