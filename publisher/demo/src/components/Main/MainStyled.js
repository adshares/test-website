import styled from 'styled-components'

export const Main = styled.main`
  max-width: 1460px;
  margin: 0 auto;
  height: 50vh;
  width: 100%;
  padding: 24px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background: ${props =>
    `linear-gradient(0deg,rgba(22,77,161, 0.1),rgba(22,77,161,0.4)), ${
        props.bgImage
        } left bottom`};
  background-repeat: repeat;
  position: relative;

  @media only screen and (min-width: 1224px) {
    height: 40vh;
  background-size: 130%;

  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-self: flex-start;
  align-items: center;
  justify-content: center;

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
  height: 100px;

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

