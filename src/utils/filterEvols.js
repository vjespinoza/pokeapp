export const filterEvols = (evolutions, cardName) => {
    const arr = evolutions
        .filter((e) => {
            return e.name !== cardName;
        })
        .sort((a, b) => a.id - b.id);
    return arr;
};
