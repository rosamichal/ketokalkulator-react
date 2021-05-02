import styled from 'styled-components';

export const PopupWrapper = styled.div`
    z-index: 1001;
    position: fixed;
    width: 100%;
    overflow-y: auto;
    bottom: 0;
    top: 0;
    background: #fff;
    display: flex;
    flex-direction: column;
`;

export const PopupHeader = styled.h2`
    /* margin: 0;
    padding: 16px 0; */
    color: ${({ theme }) => theme.common.popup.headerColor};
    font-size: 22px;
    text-align: center;
`;

export const PopupContent = styled.div`
    margin: 16px;
    flex: 1 0;
    overflow: auto;
`;

export const PopupButtons = styled.div`
    margin: 16px;
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
`;