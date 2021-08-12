import { useState } from "react";

const useShowPassword = () => {
    const [showPassword, setShowPassword] = useState({
        newPassword: false,
        confirmPassword: false,
        loginPassword: false,
    });

    const handleShowPassword = (e) => {
        const { pwd } = e.target.dataset;
        if (pwd === "new-password") {
            setShowPassword(
                !showPassword.newPassword
                    ? { ...showPassword, newPassword: true }
                    : { ...showPassword, newPassword: false }
            );
        }
        if (pwd === "confirm-password") {
            setShowPassword(
                !showPassword.confirmPassword
                    ? { ...showPassword, confirmPassword: true }
                    : { ...showPassword, confirmPassword: false }
            );
        }
        if (pwd === "login-password") {
            setShowPassword(
                !showPassword.loginPassword
                    ? { ...showPassword, loginPassword: true }
                    : { ...showPassword, loginPassword: false }
            );
        }
    };

    return { showPassword, handleShowPassword };
};

export default useShowPassword;
