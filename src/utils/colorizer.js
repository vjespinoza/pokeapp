let pokeTypeColors = {
    bug: ["#729f3f", "#729f3f"],
    dark: ["#707070", "#707070"],
    dragon: ["#53a4cf", "#f16e57"],
    electric: ["#eed535", "#eed535"],
    fairy: ["#fdb9e9", "#fdb9e9"],
    fighting: ["#d56723", "#d56723"],
    fire: ["#fd7d24", "#fd7d24"],
    flying: ["#3dc7ef", "#bdb9b8"],
    ghost: ["#7b62a3", "#7b62a3"],
    grass: ["#9bcc50", "#9bcc50"],
    ground: ["#f7de3f", "#ab9842"],
    ice: ["#51c4e7", "#51c4e7"],
    normal: ["#a4acaf", "#a4acaf"],
    poison: ["#b97fc9", "#b97fc9"],
    psychic: ["#f366b9", "#f366b9"],
    rock: ["#a38c21", "#a38c21"],
    steel: ["#9eb7b8", "#9eb7b8"],
    water: ["#4592c4", "#4592c4"],
};

export const colorizer = (type) => {
    let color = pokeTypeColors[type];
    return color;
};
