import styled from "styled-components";
import { Button } from "../shared/button";

export const PokeCardContainer = styled.article`
    display: block;
    background-color: #fff;
    width: calc(225px * 1.4);
    height: calc(300px * 1.4);
    -webkit-perspective: 800px;
    perspective: 800px;
`;

export const InnerWrapper = styled.div`
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transition: -webkit-transform 1s;
    transition: transform 1s;
    -webkit-transform: ${(props) =>
        props.flipCard ? "rotateY(180deg)" : "rotateY(0deg)"};
    transform: ${(props) =>
        props.flipCard ? "rotateY(180deg)" : "rotateY(0deg)"};
`;

export const ImageWrapper = styled.section`
    display: block;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 225px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

    & div.overflow {
        display: block;
        width: 100%;
        height: 100%;
        overflow: hidden;
        border-radius: 5px;
    }

    & div.blob {
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;

        & svg {
            position: absolute;
            top: -540px;
            left: -390px;
            width: 350%;
        }
    }

    & div.image {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }

    & img {
        height: 120%;
        margin-top: 10px;
        filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.5));
    }
`;

export const InfoWrapper = styled.section`
    display: grid;
    grid-template-areas:
        "name name"
        "type number";
    position: absolute;
    top: 240px;
    left: 0px;
    width: 100%;
    padding: 30px 20px 20px 20px;

    & p.poke-number {
        grid-area: number;
        font-size: 2rem;
        align-self: center;
        justify-self: center;
    }

    & h2.poke-name {
        grid-area: name;
        text-align: center;
        text-transform: capitalize;
        font-size: 2.6rem;
        margin-bottom: 20px;
    }

    & div.type-wrapper {
        grid-area: type;
        padding-left: 15px;
    }

    & h4.poke-types {
        grid-area: name;
        font-size: 1.2rem;
        font-weight: 500;
    }

    & ul.poke-list {
        display: flex;
        list-style: none;
        margin-top: 5px;

        & li {
            margin-right: 10px;
        }
    }
`;

export const CardFront = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    box-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.2);
    cursor: ${(props) => (props.flipCard ? "default" : "pointer")};
    pointer-events: ${(props) => (props.flipCard ? "none" : "auto")};
`;

export const CardBack = styled.div`
    border-radius: 5px;
    box-shadow: inset 0px 0px 0px 1px rgba(1, 1, 1, 0.2),
        inset 0px 0px 0px 5px rgba(255, 255, 255, 1);
    position: absolute;
    top: 0;
    left: 0;
    display: grid;
    grid-template-areas:
        "left right"
        "bottom bottom";
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 2fr 1fr;
    gap: 15px;
    padding: 20px;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to top, #00c6fb 0%, #005bea 100%);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);

    & .closeCard {
        position: fixed;
        top: -4px;
        right: -4px;
        background: #f94144;
        color: #fff;
        width: 20px;
        height: 20px;
        border-radius: 5000px;
        cursor: pointer;
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);

        & svg {
            pointer-events: none;
            margin: 0 0 2px 1px;
        }
    }
`;

export const BackInfoLeft = styled.div`
    grid-area: left;
    display: flex;
    flex-direction: column;
    padding: 15px;
    border-radius: 3px;
    width: 100%;
    height: 100%;
    background: #fff;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);

    & h4 {
        margin-bottom: 10px;
        font-size: 1.2rem;
        font-weight: 500;
    }

    & div.weakness-list {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        margin-bottom: 20px;
    }

    & ul.poke-list {
        display: flex;
        flex-direction: column;
        list-style: none;

        & li {
            text-transform: capitalize;
            font-size: 1rem;
            margin-right: 10px;
        }
    }
`;

export const BackInfoRight = styled.div`
    grid-area: right;
    display: flex;
    flex-direction: column;
    padding: 15px;
    border-radius: 3px;
    width: 100%;
    height: 100%;
    background: #fff;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);

    & h4 {
        margin-bottom: 10px;
        font-size: 1.2rem;
        font-weight: 500;
    }

    & p,
    div {
        margin-bottom: 20px;
        font-size: 1rem;
    }
`;

export const BackSlider = styled.div`
    grid-area: bottom;
    display: flex;
    padding: 15px;
    width: 100%;
    height: 100%;
    border-radius: 3px;
    background: #fff;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);

    & h4 {
        margin-bottom: 10px;
        font-size: 1.2rem;
        font-weight: 500;
    }
`;

export const Slider = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    position: relative;

    & img {
        display: block;
        position: absolute;
        top: -45px;
        right: -10px;
        height: 150px;
        filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.6));
    }
`;

export const SliderControls = styled.div`
    display: flex;
    width: 100px;
    height: fit-content;
    justify-content: space-between;
    transform: translate(-80px, 50px);
`;

export const SliderAction = styled(Button)`
    visibility: ${(props) => (props.toggle ? "visible" : "hidden")};
    border-radius: 1000px;
    padding: 0;
    width: 35px;
    height: 35px;
`;
