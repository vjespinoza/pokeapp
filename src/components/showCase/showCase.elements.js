import styled from "styled-components";

export const ShowCaseContainer = styled.main`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    width: 90%;
    max-width: 960px;
    margin: 65px auto;
`;
