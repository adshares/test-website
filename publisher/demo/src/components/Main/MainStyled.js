import styled from 'styled-components'

export const Main = styled.main`
  max-width: 1460px;
  margin: 0 auto;
  height: 50vh;
  width: 100%;
  padding: 24px 0;
  display: grid;
  background-size: cover;
  background: ${props =>
    ` linear-gradient(0deg, rgba(0,0,0,0.7), rgba(0,0,0,0.8)), ${
        props.bgImage
        } center`};
  background-size: cover;
  position: relative;
  grid-template-columns: 40px 1fr 40px;
  grid-template-rows: ${props => props.gridRowsMobile || `50px 100px 2fr`};
  grid-template-areas:
    '. hamburger-menu .'
    '. main-title .'
    '. main-logo .  ';

  @media only screen and (min-width: 768px) {
    grid-template-columns: ${props => props.gridColumnsTablet || '1fr 5fr 1fr'};
    grid-template-rows: ${props => props.gridRowsTablet || '100px 1fr 100px'};
    grid-template-areas: ${props =>
    props.templateAreasTablet ||
    '"main-back-nav main-nav . "".  main-logo . " ". main-articles-list .";'};
  }

  @media only screen and (min-width: 1224px) {
    height: 40vh;
    grid-template-columns: 1fr 3fr 200px 3fr 1fr;
    grid-template-rows: 100px 4fr 1fr;
    grid-template-areas: ${props =>
    props.templateAreasDesktop ||
    ' "main-back-nav . . main-nav . " ". main-logo main-logo main-logo . " ". main-articles-list main-articles-list main-articles-list ."'};
  }
`;

export const LogoWrapper = styled.div`
  grid-area: main-logo;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  align-items: center;

  @media only screen and (min-width: 768px) {
    align-self: center;
    justify-self: center;
  }

  @media only screen and (min-width: 1024px) {
    align-self: center;
    justify-self: center;
  }
`;

export const Logo = styled.img`
  width: auto;
  height: 160px;

  @media only screen and (min-width: 1024px) {
    height: 100px;
    width: auto;
  }
`;

export const Title = styled.span`
  font-weight: 600;
  font-size: 24px;
  color: var(--white);
  text-transform: uppercase;
  margin-top: 32px;
  
  @media screen and (max-width: 767px) {
    text-align: center;
    line-height: 1.3;
  }
`;

export const Subtitle = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: var(--gray);
  text-align: center; 
  margin: 8px 0;
  
  @media screen and (max-width: 767px) {
    line-height: 1.3;
  }
`;

