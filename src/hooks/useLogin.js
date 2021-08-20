import { useEffect } from "react";
import { successMessage } from "../utils/createModal";
import swal from "sweetalert";

const useLogin = ({
    data,
    setData,
    isValidated,
    fetchData,
    fetchError,
    postRequest,
    auth,
    setAuth,
}) => {
    useEffect(() => {
        isValidated.loginForm &&
            postRequest({ email: data.email, password: data.password });
    }, [isValidated]);

    useEffect(() => {
        if (fetchData) {
            setAuth({
                ...auth,
                user: data.email,
                token: fetchData.token,
            });
            successMessage(isValidated);
        }

        setData({
            form: "",
            name: "",
            email: "",
            password: "",
            password2: "",
        });
    }, [fetchData]);

    useEffect(() => {
        fetchError &&
            swal({
                title: "Acceso negado...",
                text: "Email o contraseña no existen",
                icon: "error",
            });
    }, [fetchError]);
};

export default useLogin;
