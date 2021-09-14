import styled from "styled-components";

export const LoaderCard = styled.div`
    display: block;
    width: calc(225px * 1.4);
    height: calc(300px * 1.4);
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

export const LoaderCircular = styled.div`
    display: block;
    margin: 50px auto;
    width: 100px;
    height: 100px;
    background-image: url("../img/poke_ball.png");
    background-repeat: no-repeat;
    background-size: cover;
    clip-path: circle(50% at 50% 50%);
    animation: rotate 1s linear infinite;
    opacity: 80%;

    @keyframes rotate {
        0% {
            transform: rotate(0);
        }
        50% {
            transform: rotate(360deg);
        }
        100% {
            transform: rotate(0);
        }
    }
`;
