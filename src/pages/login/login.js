import { PageContainer } from "../../components/shared/pageContainer";
import UserLogin from "./../../components/login/userLogin";

const Login = ({
    isActive,
    handleIsActive,
    isValidated,
    setIsValidated,
    auth,
    setAuth,
}) => {
    return (
        <PageContainer singlePage>
            <UserLogin
                isActive={isActive}
                handleIsActive={handleIsActive}
                isValidated={isValidated}
                setIsValidated={setIsValidated}
                auth={auth}
                setAuth={setAuth}
            />
        </PageContainer>
    );
};

export default Login;
