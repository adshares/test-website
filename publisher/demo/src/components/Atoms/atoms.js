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

export const AdBanner = styled.div`
  margin: 16px auto;
  height: ${props => props.height || '0px'};
  width: ${props => props.width || '0px'};
  background: darkred;
  
  position: ${props => props.position};
  top: ${props => props.top};
  bottom: ${props => props.bottom};
  left: ${props => props.left};
  right: ${props => props.right};
  
  @media only screen and (max-width: ${props=> props.hideUnder}) {
    display: none;
  }
    
  @media only screen and (min-width: ${props=> props.hideAbove}) {
    display: none;
  }
`;

