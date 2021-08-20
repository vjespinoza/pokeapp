import { useState, useEffect } from "react";
//Components
import Navbar from "./components/navbar/navbar";
//Pages
import { Home, Login, Store } from "./pages";
//Styles
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/globalStyles";
//React Router
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";

function App() {
    const [isActive, setIsActive] = useState(false);
    const [isValidated, setIsValidated] = useState({
        loginForm: false,
        signupForm: false,
    });
    const [auth, setAuth] = useState({
        token: sessionStorage.ACCESS_TOKEN
            ? JSON.parse(sessionStorage.ACCESS_TOKEN)
            : "",
        user: sessionStorage.USER ? JSON.parse(sessionStorage.USER) : "",
    });

    useEffect(() => {
        console.log(auth);
        if (auth.token !== "" && auth.user !== "") {
            sessionStorage.setItem("ACCESS_TOKEN", JSON.stringify(auth.token));
            sessionStorage.setItem("USER", JSON.stringify(auth.user));
        }
    }, [auth]);

    const handleIsActive = () => {
        setIsActive((isActive) => !isActive);
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Router>
                    <Navbar auth={auth} setAuth={setAuth} />
                    <Switch>
                        <Route exact path="/">
                            <Home user={auth.user} />
                        </Route>
                        <Route path="/login">
                            {auth.token ? (
                                <Redirect to="/store" />
                            ) : (
                                <Login
                                    isActive={isActive}
                                    handleIsActive={handleIsActive}
                                    isValidated={isValidated}
                                    setIsValidated={setIsValidated}
                                    auth={auth}
                                    setAuth={setAuth}
                                />
                            )}
                        </Route>
                        <Route path="/store">
                            {!auth.token ? <Redirect to="/login" /> : <Store />}
                        </Route>
                    </Switch>
                </Router>
            </ThemeProvider>
        </>
    );
}

export default App;
