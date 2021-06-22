import styled, { css } from 'styled-components';
import { FaArrowCircleUp } from 'react-icons/fa';


export const StyledArrow = styled(FaArrowCircleUp)`
    cursor: pointer;
    height: 40px;
    display: none;
    position: fixed;
    width: 40px;
    bottom: 10px;
    z-index: 1000;
    opacity: 0.7;
    margin: 0 auto;
    left: 0;
    right: 0;

    ${props => props.show && css`
        display: flex
    `}
`;