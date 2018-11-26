import styled from 'styled-components'
import {Link} from 'gatsby'

export const Nav = styled.nav`
  grid-area: main-nav;
  display: none;
  
  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

export const List = styled.ul`
  display: flex;
  
  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const NavLink = styled(Link)`
  color: var(--white);
  font-size: 20px;
  font-weight: 500;
  
  @media only screen and (min-width: 768px) {
    padding: 16px;
    text-decoration: none;

     &.active {
       background: rgba(255, 255, 255, 0.2);
       text-decoration: none;
    }
  }
`;

export const NavItem = styled.li`
  padding: 8px 0;
  
  @media screen and (min-width: 768px) {
    margin-left: 24px;
    position: relative;
  }

  @media screen and (min-width: 1024px) {
    margin-left: 24px;
  }
`;
