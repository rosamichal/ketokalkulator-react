import styled from 'styled-components';

export const RecipeListItemWrapper = styled.li`
    background: ${({ theme }) => theme.recipeList.recipeListItem.background};
    color: ${({ theme }) => theme.recipeList.recipeListItem.color};
    border-radius: 5px;
    box-shadow: 4px 4px 5px rgb(82 82 82 / 40%);
    padding: 10px;
`;

export const RecipeListItemHeader = styled.h2`
    color: ${({ theme }) => theme.recipeList.recipeListItem.headerColor};
    margin: 0;
    padding: 8px 0;
    font-size: 18px;
    text-align: center;
`;