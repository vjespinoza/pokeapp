import styled from "styled-components";

export const InputLabel = styled.label`
    color: ${(props) => (props.ligth ? "white" : props.theme.colors.font)};
    font-weight: bold;
    font-size: 1.1rem;
    position: absolute;
    top: 8px;
    left: 5px;
    transition: all ease-in-out 200ms;
    transform-origin: left;
    cursor: text;
    pointer-events: none;
`;
