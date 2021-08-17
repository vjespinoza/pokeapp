const SvgGradient = ({ colors, id }) => {
    const style = {
        start: {
            stopColor: colors[0],
            stopOpacity: 1,
        },
        stop: {
            stopColor: colors[1],
            stopOpacity: 1,
        },
    };

    return (
        <defs>
            <radialGradient
                id={`grad${id}`}
                cx="50%"
                cy="50%"
                r="50%"
                fx="50%"
                fy="50%"
            >
                <stop offset="0%" style={style.start} />
                <stop offset="100%" style={style.stop} />
            </radialGradient>
        </defs>
    );
};

export default SvgGradient;
