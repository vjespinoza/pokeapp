import { useState, useEffect } from "react";
//Import utility funtions
import { validate } from "../utils/validate";
import { errorMessage } from "../utils/createModal";

const useFormValidate = ({ isValidated, setIsValidated }) => {
    const [data, setData] = useState({
        form: "",
        name: "",
        email: "",
        password: "",
        password2: "",
    });

    const [error, setError] = useState();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };

    const handleSubmnit = (e) => {
        e.preventDefault();
        setError(validate(data));
    };

    const handleClick = (e) => {
        const { btn } = e.target.dataset;
        setData({
            ...data,
            form: btn,
        });
    };

    useEffect(() => {
        if (error) {
            let form = data.form;
            let errors = Object.entries(error).length !== 0;

            if (!errors && form === "login") {
                setIsValidated({
                    ...isValidated,
                    loginForm: true,
                });
            } else if (errors && form === "login") {
                errorMessage(error);
            }

            if (!errors && form === "signup") {
                setIsValidated({
                    ...isValidated,
                    signupForm: true,
                });
                setData({
                    form: "",
                    name: "",
                    email: "",
                    password: "",
                    password2: "",
                });
            } else if (errors && form === "signup") {
                errorMessage(error);
            }
        }
    }, [error]);

    return { data, setData, error, handleChange, handleSubmnit, handleClick };
};

export default useFormValidate;
