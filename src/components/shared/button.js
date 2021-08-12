import styled from "styled-components";

export const Button = styled.button`
    display: inline-block;
    text-transform: uppercase;
    background-color: ${(props) =>
        props.primary
            ? props.theme.colors.primary
            : props.theme.colors.secondary};
    padding: 0.8rem 1rem;
    max-width: 100%;
    outline: none;
    border: none;
    color: white;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
    font-size: ${(props) => (props.smFont ? "0.6rem" : "0.8rem")};
    margin: ${(props) => (props.noMargin ? "0" : "1rem 0 0 0")};
    align-self: flex-start;

    &:focus,
    &:hover {
        filter: brightness(1.1);
        transition: filter ease-in-out 200ms;
    }

    @media (max-width: 768px) {
        align-self: stretch;
    }
`;
