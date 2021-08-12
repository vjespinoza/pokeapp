import { PageContainer } from "../../components/shared/pageContainer";
import ShowCase from "./../../components/showCase/showCase";

const Store = () => {
    return (
        <PageContainer>
            <h1>Pokémons</h1>
            <p>Muestra Pokémons</p>
            <ShowCase />
        </PageContainer>
    );
};

export default Store;
