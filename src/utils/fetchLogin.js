import axios from "axios";
import swal from "sweetalert";

export const fetchLogin = (data, isValidated, setAuth) => {
    const api = axios.create({
        baseURL: "https://reqres.in/api/login",
    });

    const POST_Request = async () => {
        try {
            let request = await api.post("/", {
                email: data.email,
                password: data.password,
            });
            let response = request.data.token;

            setAuth({ token: response, user: data.email });

            swal({
                title: "Bienvenido!",
                text: "Has ingresado a tu cuenta",
                icon: "success",
            });

            return response;
        } catch (error) {
            swal({
                title: "Acceso negado...",
                text: "Email o contraseña no existen",
                icon: "error",
            });
            return error;
        }
    };

    if (isValidated.loginForm && data.email !== "") {
        POST_Request();
    }
};

// eve.holt@reqres.in
// cityslicka
