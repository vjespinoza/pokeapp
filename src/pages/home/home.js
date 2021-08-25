import { PageContainer } from "../../components/shared/pageContainer";
//Temp imports
import { Link } from "react-router-dom";
import { Button } from "../../components/shared/button";

const Home = ({ user }) => {
    return (
        <PageContainer singlePage>
            <h1>Home page</h1>
            <h3>Bienvenido {user}</h3>
            {/* Temp button */}
            <Link to="pokedex">
                <Button>Go to pokedex</Button>
            </Link>
        </PageContainer>
    );
};

export default Home;
