import styled from 'styled-components';

export const FooterWrapper = styled.footer`
    background: ${({ theme }) => theme.footer.background};
    color: ${({ theme }) => theme.footer.color};
    font-size: 13px;
    padding: 5px 10px 30px;
`;