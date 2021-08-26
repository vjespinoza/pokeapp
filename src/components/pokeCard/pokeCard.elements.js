import styled from "styled-components";

export const PokeCardContainer = styled.article`
    display: block;
    background-color: #fff;
    width: 225px;
    height: 300px;
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
    height: 125px;
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
            top: -420px;
            left: -290px;
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
    display: block;
    position: absolute;
    top: 125px;
    left: 0px;
    width: 100%;
    padding: 30px 20px 20px 20px;

    & p.poke-number {
        font-size: 0.8rem;
    }

    & h2.poke-name {
        text-transform: capitalize;
        font-size: 1.6rem;
        margin-bottom: 10px;
    }

    & ul.poke-info-type {
        display: flex;
        font-size: 1rem;
        list-style: none;
        margin-top: 5px;

        & li {
            font-size: 0.8rem;
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to top, #00c6fb 0%, #005bea 100%);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);

    & span {
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

export const BackInfo = styled.div`
    display: flex;
    justify-content: space-between;
    width: 195px;
    height: 190px;
    margin-top: 15px;
`;

export const BackInfoLeft = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: 5px;
    width: 47.5%;
    height: 100%;
    background: #fff;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
`;

export const BackInfoRight = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: 5px;
    width: 47.5%;
    height: 100%;
    background: #fff;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
`;

export const BackSlider = styled.div`
    display: flex;
    padding: 10px;
    width: 195px;
    height: 70px;
    border-radius: 5px;
    margin-bottom: 15px;
    background: #fff;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
`;

export const SliderLeft = styled.div`
    display: flex;
    width: 50%;
    background: red;
    flex-direction: column;
    justify-content: space-between;
`;

export const SliderRigth = styled.div`
    display: flex;
    width: 50%;
    background: blue;
    justify-content: center;
    align-items: center;

    & img {
        height: 50%;
    }
`;
