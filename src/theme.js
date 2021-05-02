const colorNames = {
    LasMaras: "#4F525B",
    WhiteSmoke: "#F5F5F5",
    Crocodile: "#006E00",
    StickySap: "#5EB000",
    White: "#FFFFFF",
    TomatoFrog: "#FF4444"
}

export const theme = {
    breakpoints: {
        mobile: 550,
    },
    common: {
        input: {
            borderColor: colorNames.WhiteSmoke
        },
        textArea: {
            borderColor: colorNames.LasMaras
        },
        button: {
            default: {
                background: colorNames.WhiteSmoke,
                color: colorNames.LasMaras,
                borderColor: colorNames.LasMaras
            },
            primary: {
                background: colorNames.StickySap,
                color: colorNames.White,
                borderColor: colorNames.WhiteSmoke
            },
            danger: {
                background: colorNames.TomatoFrog,
                color: colorNames.White,
                borderColor: colorNames.WhiteSmoke
            }
        },
        popup:{
            headerColor: colorNames.StickySap,
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
        recipeForm: {
            background: colorNames.White,
            color: colorNames.LasMaras,
        }
    },
    recipeList: {
        recipeListItem: {
            background: colorNames.White,
            color: colorNames.LasMaras,
            headerColor: colorNames.StickySap
        }
    }
}