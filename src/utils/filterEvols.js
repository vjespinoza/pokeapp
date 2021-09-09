export const filterEvols = (evolutions, cardName) => {
    const arr = evolutions[0]
        .filter((e) => {
            return e.name !== cardName;
        })
        .sort((a, b) => a.id - b.id);
    return arr;
};
