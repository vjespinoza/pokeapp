import styled from "styled-components";

export const ShowCaseContainer = styled.main`
    display: block;
    width: 90%;
    margin: 65px auto;
    font-family: "Flexo Medium", arial, sans-serif;
`;

export const PokedexGrid = styled.main`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
    gap: 20px;
    width: 90%;
    max-width: 960px;
    margin: 65px auto;
    justify-items: center;
`;
