import { PageContainer } from "../../components/shared/pageContainer";
import ShowCase from "../../components/showCase/showCase";
import Search from "../../components/search/search";

const Pokedex = () => {
    return (
        <PageContainer>
            <Search />
            <ShowCase />
        </PageContainer>
    );
};

export default Pokedex;
