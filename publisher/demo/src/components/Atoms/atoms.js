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


