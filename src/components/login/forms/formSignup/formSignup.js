import { FormTitle } from "../formTitle";
import { FormFooter } from "../formFooter";
import { Form } from "../../../shared/form";
import { Input } from "../../../shared/input";
import { Button } from "../../../shared/button";
import { InputLabel } from "../../../shared/inputLabel";
import { InputIcon } from "../../../shared/inputIcon";
import { InputGroup } from "../../../shared/inputGroup";

//Import custom hook
import useFormValidate from "../../../../hooks/useFormValidate";

export const FormSignup = ({
    handleIsActive,
    isActive,
    isValidated,
    setIsValidated,
    showPassword,
    handleShowPassword,
}) => {
    const { data, handleChange, handleSubmnit, handleClick } = useFormValidate({
        isValidated,
        setIsValidated,
    });

    return (
        <Form isActive={isActive} onSubmit={(e) => handleSubmnit(e)}>
            <FormTitle>Registrarse</FormTitle>
            <InputGroup>
                <Input
                    noBG
                    value={data.name}
                    name="name"
                    onChange={(e) => handleChange(e)}
                    primary
                    type="text"
                    placeholder="Nombre"
                />
                <InputLabel>Nombre</InputLabel>
            </InputGroup>
            <InputGroup>
                <Input
                    noBG
                    value={data.email}
                    name="email"
                    onChange={(e) => handleChange(e)}
                    primary
                    type="email"
                    placeholder="Correo"
                />
                <InputLabel>Correo Electrónico</InputLabel>
            </InputGroup>
            <InputGroup>
                <Input
                    noBG
                    value={data.password}
                    name="password"
                    onChange={(e) => handleChange(e)}
                    primary
                    type={showPassword.newPassword ? "text" : "password"}
                    placeholder="Contraseña"
                />
                <InputLabel>Contraseña</InputLabel>
                <InputIcon onClick={(e) => handleShowPassword(e)}>
                    {showPassword.newPassword ? (
                        <span
                            data-pwd="new-password"
                            className="material-icons"
                        >
                            visibility_off
                        </span>
                    ) : (
                        <span
                            data-pwd="new-password"
                            className="material-icons"
                        >
                            visibility
                        </span>
                    )}
                </InputIcon>
            </InputGroup>
            <InputGroup>
                <Input
                    noBG
                    value={data.password2}
                    name="password2"
                    onChange={(e) => handleChange(e)}
                    primary
                    type={showPassword.confirmPassword ? "text" : "password"}
                    placeholder="Confirmar contraseña"
                />
                <InputLabel>Confirmar Contraseña</InputLabel>
                <InputIcon onClick={(e) => handleShowPassword(e)}>
                    {showPassword.confirmPassword ? (
                        <span
                            data-pwd="confirm-password"
                            className="material-icons"
                        >
                            visibility_off
                        </span>
                    ) : (
                        <span
                            data-pwd="confirm-password"
                            className="material-icons"
                        >
                            visibility
                        </span>
                    )}
                </InputIcon>
            </InputGroup>
            <Button
                data-btn="signup"
                onClick={(e) => handleClick(e)}
                primary
                type="submit"
            >
                Registrarse
            </Button>
            <FormFooter>
                <p>
                    Ya tienes una cuenta? Inicia sesión{" "}
                    <span onClick={() => handleIsActive()}>aquí</span>.
                </p>
            </FormFooter>
        </Form>
    );
};
