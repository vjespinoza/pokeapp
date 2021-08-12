import { PageContainer } from "../../components/shared/pageContainer";

const Home = ({ user }) => {
    return (
        <PageContainer singlePage>
            <h1>Home page</h1>
            <h3>Bienvenido {user}</h3>
        </PageContainer>
    );
};

export default Home;
