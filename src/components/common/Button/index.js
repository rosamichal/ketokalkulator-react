import styled, { css } from 'styled-components'

export const Button = styled.button`
    background: ${({ theme }) => theme.common.button.default.background};
    color: ${({ theme }) => theme.common.button.default.color};
    border: 1px solid ${({ theme }) => theme.common.button.default.borderColor};
    padding: 6px 12px;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;

    ${props => props.primary && css`
        background: ${({ theme }) => theme.common.button.primary.background};
        color: ${({ theme }) => theme.common.button.primary.color};
        border-color: ${({ theme }) => theme.common.button.primary.borderColor};
    `}

    ${props => props.danger && css`
        background: ${({ theme }) => theme.common.button.danger.background};
        color: ${({ theme }) => theme.common.button.danger.color};
        border-color: ${({ theme }) => theme.common.button.danger.borderColor};
    `}

    ${props => props.square && css`
        width: ${props.square}px;
        height: ${props.square}px;
    `}
`;