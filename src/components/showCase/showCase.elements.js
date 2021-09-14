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
    position: relative;
`;
