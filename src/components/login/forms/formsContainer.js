import styled from "styled-components";

export const FormsContainer = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 45rem;
    min-width: 20rem;
    box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);
    position: relative;
    overflow: hidden;

    &::before {
        content: "chevron_right";
        font-family: "Material Icons";
        font-size: 30px;
        line-height: 50px;
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: ${(props) =>
            props.isActive
                ? "translate(-50%, -50%) rotate(0.5turn)"
                : "translate(-50%, -50%) rotate(0turn)"};
        width: 50px;
        height: 50px;
        display: block;
        fill: blueviolet;
        border-radius: 500px;
        box-shadow: inset 200px 200px #e5e5e5,
            1px 1px 4px 2px rgba(0, 0, 0, 0.2);
        z-index: 100;
        transition: transform ease-in-out 200ms;
    }

    @media (max-width: 768px) {
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
        max-width: 100vw;
        width: 100vw;
        height: 100vh;

        &::before {
            display: none;
        }
    }
`;
