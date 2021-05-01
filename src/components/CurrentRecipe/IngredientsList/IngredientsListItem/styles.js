import styled from 'styled-components'

export const IngredientsListItemWrapper = styled.li`
    display: grid;
    grid-template-columns: 35px 50px 35px 1fr 35px;
    -moz-column-gap: 5px;
    column-gap: 5px;
    margin: 10px 0;
`;

export const IngredientName = styled.span`
    border: 1px solid #4f525c;
    padding: 5px;
`;