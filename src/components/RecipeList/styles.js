import styled from 'styled-components'

export const RecipeListWrapper = styled.div`
    padding: 10px;
    margin-top:30px;
`;

export const RecipeListContainer = styled.ul`
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    margin-bottom: 30px;
    align-items: start;
`;