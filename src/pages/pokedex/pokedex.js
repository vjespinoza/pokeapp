import { PageContainer } from "../../components/shared/pageContainer";
import ShowCase from "../../components/showCase/showCase";

const Pokedex = ({ auth }) => {
    return (
        <PageContainer>
            <ShowCase auth={auth} />
        </PageContainer>
    );
};

export default Pokedex;
