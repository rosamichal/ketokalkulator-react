import styled from 'styled-components'
import { ReactComponent as AvocadoImg } from './avocado.svg';

export const HeaderWrapper = styled.div`
    background: ${({ theme }) => theme.header.darkGreen};
    color: white;
`;

export const Title = styled.div`
    padding: 20px;
    background-image: linear-gradient(340deg, ${({ theme }) => theme.header.darkGreen} 0%, ${({ theme }) => theme.header.lightGreen} 100%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`;

export const Logo = styled(AvocadoImg)`
    width: 100px;
    height: 100px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
        width: 60px;
        height: 60px;
    }
`;

export const Text = styled.span`
    padding: 0;
    margin: 10px 30px;
    font-size: 60px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 25px;
    }
`;