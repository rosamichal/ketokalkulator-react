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
    color: ${({ theme }) => theme.common.popup.headerColor};
    background-color: ${({ theme }) => theme.common.popup.headerBackground};
    font-size: 22px;
    text-align: center;
    margin: 0;
    padding: 20px 10px;
`;

export const PopupContent = styled.div`
    padding: 16px;
    flex: 1 0;
    overflow: auto;
    background-color: ${({ theme }) => theme.common.popup.contentBackground}
`;

export const PopupButtons = styled.div`
    margin: 16px;
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
`;