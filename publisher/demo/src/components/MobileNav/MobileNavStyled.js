import styled from "styled-components";

export const MenuContainer = styled.div`
  display: none;
  @media screen and (max-width: 767px) {
    grid-area: hamburger-menu;
    display: block;
    position: relative;
    pointer-events: all;  
  }
`;
