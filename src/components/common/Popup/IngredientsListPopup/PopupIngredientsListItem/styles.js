import styled from 'styled-components';

export const PopupIngredientsListItemWrapper = styled.li`
    border-radius: 5px;
    box-shadow: 4px 4px 3px rgb(82 82 82 / 40%);
    background-color: ${({ theme }) => theme.common.popup.ingredientsListItem.background};
    color: ${({ theme }) => theme.common.popup.ingredientsListItem.color};
    padding: 10px;
    font-size: 18px;
    text-align: center;
    margin-bottom: 12px;
`;

export const PopupIngredientsListItemHeader = styled.h3`
    margin: 0 0 8px;
    color: ${({ theme }) => theme.common.popup.ingredientsListItem.headerColor};
`;