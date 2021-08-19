import { useState, useEffect } from "react";
//Import utility funtions
import { validate } from "../utils/validate";

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
                console.log("Success - log");
                setIsValidated({
                    ...isValidated,
                    loginForm: true,
                });
            }

            if (!errors && form === "signup") {
                console.log("Success - reg");
                setIsValidated({
                    ...isValidated,
                    signupForm: true,
                });
            }
        }
    }, [error]);

    return { data, error, handleChange, handleSubmnit, handleClick };
};

export default useFormValidate;
