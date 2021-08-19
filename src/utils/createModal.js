//Import sweet alert
import swal from "sweetalert";

export const errorMessage = (errors) => {
    let list = Object.values(errors);
    let text = "";

    if (errors) {
        for (let item of list) {
            text += `* ${item}.\n`;
        }
        swal({
            title: "Algo salió mal!",
            text: text,
            icon: "error",
        });
    }
};

export const successMessage = (isValidated) => {
    if (isValidated.signupForm) {
        swal({
            title: "Felicidades!",
            text: "Registro creado exitosamente",
            icon: "success",
        });
    }

    if (isValidated.loginForm) {
        swal({
            title: "Bienvenido!",
            text: "Has ingresado a tu cuenta",
            icon: "success",
        });
    }
};
