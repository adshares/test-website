import styled from 'styled-components'

export const AccessibilityInfo = styled.span`
  position: absolute;
  top: -9999px;
  left: -9999px;
`;

export const List = styled.ul`
  height: ${props => props.height || '80px'};
  display: flex;
  justify-content: center;
`;

export const ListElement = styled.li`
  margin-right: 8px;
  height: 31px;
  width: 31px;

  &:hover,
  &:focus {
    opacity: 0.8;
  }
`;

export const Link = styled.a`
  color: ${props => props.color || `var(--white)`};
`;


export const FixedButtons = styled.section`
  padding: 16px;
  bottom: 10px;
  right: 16px;
  display: flex;
  z-index: 1;
`;

export const FixedButton = styled.button`
  padding: 16px;
  background: rgba(0, 0 ,0, 0.8);
  color: var(--white);
  font-size: 18px;
  text-transform: uppercase;
  border: 0;
  border-radius: 3px;
  cursor: pointer;
  
  & + & {
    margin-left: 16px;
  }
`;

