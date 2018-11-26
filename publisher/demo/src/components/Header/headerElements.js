import styled from 'styled-components'
import { slideIn } from '../../styleUtils/keyframes'

export const Header = styled.header`
  display: none;
  opacity: 0.5;
  transform: translateY(-100px);
  
 @media screen and (min-width: 768px) {
  ${({shown}) =>
    shown &&
    `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        padding: 16px 10vw;
        background-color: var(--deep-purple);
        z-index: 99999;
        display: block;
        animation: ${slideIn} 0.5s;
        animation-fill-mode: forwards;
      `}; 
 }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${props => props.maxWidth || ''};
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  height: 40px;
  width: auto;
  margin-right: 16px;
`;

export const Title = styled.strong`
  text-transform: uppercase;
  font-weight: 300;
  font-size: 18px;
  color: var(--white);
  white-space: nowrap;
`;

export const Icon = styled.img`
  height: 40px;
  margin-left: 16px;
`;
