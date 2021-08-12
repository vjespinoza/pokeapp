import styled from "styled-components";

export const NavbarContainer = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    padding: 0 5vw;
    height: 65px;
    box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);
    background-color: #fff;
`;

export const NavbarList = styled.ul`
    height: 100%;

    &:first-of-type {
        width: 10rem;
    }
`;

export const NavbarListItem = styled.li`
    display: flex;
    align-items: center;
    height: 100%;
    list-style: none;
    font-weight: 500;
    font-size: 0.9rem;
`;

export const NavbarLogo = styled.img`
    width: 100%;
    cursor: pointer;
`;
