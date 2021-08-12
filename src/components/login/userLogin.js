import { FormsContainer } from "./forms/formsContainer";
import { FormLogin } from "./forms/formLogin/formLogin";
import { FormSignup } from "./forms/formSignup/formSignup";
import { BannerContainer, BannerImage } from "./forms/formBanner";
import svg1 from "../../assets/svg/login.svg";
import svg2 from "../../assets/svg/signup.svg";
//Custom hook
import useShowPassword from "../../hooks/useShowPassword";

const UserLogin = ({
    isActive,
    handleIsActive,
    isValidated,
    setIsValidated,
    auth,
    setAuth,
}) => {
    const { showPassword, handleShowPassword } = useShowPassword();

    return (
        <FormsContainer isActive={isActive}>
            <FormSignup
                isActive={!isActive}
                handleIsActive={handleIsActive}
                isValidated={isValidated}
                setIsValidated={setIsValidated}
                showPassword={showPassword}
                handleShowPassword={handleShowPassword}
            />
            <BannerContainer isActive={isActive} rigth>
                <BannerImage src={svg1} />
            </BannerContainer>
            <FormLogin
                isActive={isActive}
                handleIsActive={handleIsActive}
                isValidated={isValidated}
                setIsValidated={setIsValidated}
                showPassword={showPassword}
                handleShowPassword={handleShowPassword}
                auth={auth}
                setAuth={setAuth}
            />
            <BannerContainer isActive={!isActive}>
                <BannerImage src={svg2} />
            </BannerContainer>
        </FormsContainer>
    );
};

export default UserLogin;
