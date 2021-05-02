import styled from 'styled-components';

export const RecipeMacroSummary = styled.div`
    background: ${({ theme }) => theme.currentRecipe.recipeMacroSummary.background};
    color: ${({ theme }) => theme.currentRecipe.recipeMacroSummary.color};
    display: grid;
    grid-template-columns: repeat(3,1fr);
`;

export const Macro = styled.div`
    text-align: center;
    padding: 10px;
`;

export const MacroHeader = styled.h2`
    margin: 0;
`;

export const EnergyRatioWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    grid-column: 1/4;
    padding: 0 10px 10px;
`;

export const RecipeForm = styled.div`
    background: ${({ theme }) => theme.currentRecipe.recipeForm.background};
    color: ${({ theme }) => theme.currentRecipe.recipeForm.color};
    padding: 10px;
`;

export const ErrorLabel = styled.p`
    color: red;
    font-size: 13px;
    margin-top: 0;
`;

export const HintLabel = styled.h3`
    padding: 30px 10px;
    font-size: 15px;
    text-align: center;
`;