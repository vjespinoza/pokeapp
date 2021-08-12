import { Link } from "react-router-dom";
import { Button } from "../shared/button";
import {
    NavbarContainer,
    NavbarList,
    NavbarListItem,
    NavbarLogo,
} from "./navbar.elements";

const Navbar = ({ auth, setAuth }) => {
    const handleEndSession = () => {
        setAuth({
            token: "",
            user: "",
        });
        sessionStorage.clear();
    };

    return (
        <NavbarContainer>
            <NavbarList>
                <NavbarListItem>
                    <Link to="/">
                        <NavbarLogo
                            src="../img/poke-logo.png"
                            alt="pokeapp logo"
                        />
                    </Link>
                </NavbarListItem>
            </NavbarList>

            <NavbarList>
                <NavbarListItem>
                    {!auth.token ? (
                        <Link to="/login">
                            <Button noMargin smFont>
                                Iniciar Sesión
                            </Button>
                        </Link>
                    ) : (
                        <Link to="/">
                            <Button noMargin smFont onClick={handleEndSession}>
                                Cerrar Sesión
                            </Button>
                        </Link>
                    )}
                </NavbarListItem>
            </NavbarList>
        </NavbarContainer>
    );
};

export default Navbar;
