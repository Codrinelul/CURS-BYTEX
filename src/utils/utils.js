export const colorTypeGradients = (type1, type2, length) => {

    // debugger
    let color1, color2;

    switch (type1) {
        case "grass":
            color1 = "#65995b";
            break;
        case "poison":
            color1 = "#9671a0";
            break;
        case "normal":
            color1 = "#b0b0b0";
            break;
        case "fire":
            color1 = "#cc945a";
            break;
        case "water":
            color1 = "#709db5";
            break;
        case "electric":
            color1 = "#ccb84e";
            break;
        case "ice":
            color1 = "#7eddcd";
            break;
        case "fighting":
            color1 = "#de8395";
            break;
        case "ground":
            color1 = "#cf8b68";
            break;
        case "flying":
            color1 = "#c2cee7";
            break;
        case "psychic":
            color1 = "#e695c4";
            break;
        case "bug":
            color1 = "#a7ca56";
            break;
        case "rock":
            color1 = "#b5a87c";
            break;
        case "ghost":
            color1 = "#6874b3";
            break;
        case "dark":
            color1 = "#636268";
            break;
        case "dragon":
            color1 = "#7a92d1";
            break;
        case "steel":
            color1 = "#7f9394";
            break;
        case "fairy":
            color1 = "#fdc0eb";
            break;
        default:
            color1 = "gainsboro";
            break;
    }

    if (length === 2) {

        switch (type2) {
            case "grass":
                color2 = "#b1ffa2";
                break;
            case "poison":
                color2 = "#c192cd";
                break;
            case "normal":
                color2 = "#e0e0e0";
                break;
            case "fire":
                color2 = "#e6a766";
                break;
            case "water":
                color2 = "#709db5";
                break;
            case "electric":
                color2 = "#ffe972";
                break;
            case "ice":
                color2 = "#7eddcd";
                break;
            case "fighting":
                color2 = "#ae5e6e";
                break;
            case "ground":
                color2 = "#b87b5d";
                break;
            case "flying":
                color2 = "#c9d4e9";
                break;
            case "psychic":
                color2 = "#e695c4";
                break;
            case "bug":
                color2 = "#a7ca56";
                break;
            case "rock":
                color2 = "#b5a87c";
                break;
            case "ghost":
                color2 = "#8f9ce3";
                break;
            case "dark":
                color2 = "#727076";
                break;
            case "dragon":
                color2 = "#6d82ba";
                break;
            case "steel":
                color2 = "#8fa6a7";
                break;
            case "fairy":
                color2 = "#ca94ba";
                break;
            default:
                color2 = "gainsboro";
                break;
        }
    } else if (length === 1) {
        color2 = color1;
    }

    const finalColor = [color1, color2];

    return finalColor;

}