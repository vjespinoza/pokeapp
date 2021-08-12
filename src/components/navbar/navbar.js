import { Link } from "react-router-dom";
import { Button } from "../shared/button";
import {
    NavbarContainer,
    NavbarList,
    NavbarListItem,
    NavbarLogo,
} from "./navbar.elements";
import Logo from "../../assets/svg/logo.svg";

const Navbar = () => {
    return (
        <NavbarContainer>
            <NavbarList>
                <NavbarListItem>
                    <Link to="/">
                        <NavbarLogo src={Logo} alt="runrs logo" />
                    </Link>
                </NavbarListItem>
            </NavbarList>

            <NavbarList>
                <NavbarListItem>
                    <Link to="/login">
                        <Button noMargin smFont>
                            Iniciar Sesión
                        </Button>
                    </Link>
                </NavbarListItem>
            </NavbarList>
        </NavbarContainer>
    );
};

export default Navbar;
