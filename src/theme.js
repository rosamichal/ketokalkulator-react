const colorNames = {
    LasMaras: "#4F525B",
    WhiteSmoke: "#F5F5F5",
    Crocodile: "#006E00",
    StickySap: "#5EB000",
    White: "#FFFFFF"
}

export const theme = {
    breakpoints: {
        mobile: 550,
    },
    common: {
        input:{
            borderColor: colorNames.WhiteSmoke
        },
        textArea: {
            borderColor: colorNames.LasMaras
        }
    },
    body: {
        background: colorNames.WhiteSmoke,
        color: colorNames.LasMaras,
    },
    header: {
        darkGreen: colorNames.Crocodile,
        lightGreen: colorNames.StickySap,
        color: colorNames.White
    },
    footer: {
        background: colorNames.StickySap,
        color: colorNames.White,
    },
    currentRecipe: {
        recipeMacroSummary: {
            background: colorNames.StickySap,
            color: colorNames.White,
        },
        recipeForm:{
            background: colorNames.White,
            color: colorNames.LasMaras,
        }
    }
} 