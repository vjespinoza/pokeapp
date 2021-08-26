import styled from "styled-components";

const Container = styled.div`
    display: inline-flex;
    padding: 5px 3px;
    border-radius: 3px;
    position: relative;
    width: 100%;
    padding: 5px 8px 5px 8px;

    & .chip-label {
        display: block;
        color: #fff;
        text-transform: capitalize;
        text-align: center;
        width: 100%;
    }

    & .top {
        position: absolute;
        bottom: 50%;
        left: 0;
        width: 100%;
        height: 12px;
        border-top-right-radius: 3px;
        border-top-left-radius: 3px;
        z-index: -1;
    }

    & .bottom {
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 12px;
        border-bottom-right-radius: 3px;
        border-bottom-left-radius: 3px;
        z-index: -1;
    }
`;

const Chip = ({ name, colors }) => {
    const style = {
        top: { background: colors[0] },
        bottom: { background: colors[1] },
    };

    return (
        <Container>
            <p className="chip-label">{name}</p>
            <span style={style.top} className="top"></span>
            <span style={style.bottom} className="bottom"></span>
        </Container>
    );
};

export default Chip;
