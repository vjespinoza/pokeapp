import { useEffect } from "react";
import { successMessage } from "../utils/createModal";
import swal from "sweetalert";
import axios from "axios";

const useLogin = ({ data, isValidated, setIsValidated, auth, setAuth }) => {
    useEffect(() => {
        isValidated.loginForm &&
            axios
                .post("https://reqres.in/api/login", {
                    email: data.email,
                    password: data.password,
                })
                .then((res) => {
                    let token = res.data.token;
                    return token;
                })
                .then((token) => {
                    token &&
                        setAuth({
                            ...auth,
                            user: data.email,
                            token: token,
                        });
                    successMessage(isValidated);
                    setIsValidated({
                        ...isValidated,
                        loginForm: false,
                    });
                })
                .catch((error) => {
                    error &&
                        swal({
                            title: "Acceso negado...",
                            text: "Email o contraseña no existen",
                            icon: "error",
                        });
                });
    }, [isValidated]);
};

export default useLogin;
