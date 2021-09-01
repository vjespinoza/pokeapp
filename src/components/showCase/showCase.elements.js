import styled from "styled-components";

export const ShowCaseContainer = styled.main`
    display: block;
    width: 90%;
    margin: 65px auto;
    line-height: 1.2;
`;

export const PokedexGrid = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(315px, 1fr));
    gap: 20px;
    width: 100%;
    max-width: 1325px;
    margin: 65px auto;
    justify-items: center;
`;

export const CardLoader = styled.div`
    display: block;
    width: 225px;
    height: 300px;
    border-radius: 5px;
    background: #e9ecef;
    position: relative;
    overflow: hidden;

    &::after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            0.25turn,
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 0.1),
            rgba(0, 0, 0, 0)
        );
        animation: flash 1s linear infinite;

        @keyframes flash {
            0% {
                left: -100%;
            }
            100% {
                left: 100%;
            }
        }
    }
`;
