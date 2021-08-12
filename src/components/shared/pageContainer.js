import styled from "styled-components";

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    margin: 65px 0 0 0;
    height: ${(props) => (props.singlePage ? "calc(100vh - 65px)" : "auto")};
`;
