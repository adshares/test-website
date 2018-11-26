import React from 'react'
import {
  Logo,
  LogoWrapper,
  Main,
  Subtitle,
  Title,
} from './MainStyled'
import Navigation from '../Navigation/Navigation'
import MobileNav from "../MobileNav/MobileNav";

const MainPage = ({
  title,
  articles,
  logo,
  bgImage,
  gridTablets,
  gridDesktops,
  gridRowsTablet,
  gridRowsMobile,
}) => {
  return (
    <Main
      bgImage={bgImage}
      templateAreasTablet={gridTablets}
      templateAreasDesktop={gridDesktops}
      gridRowsTablet={gridRowsTablet}
      gridRowsMobile={gridRowsMobile}
    >
      <MobileNav/>

      <Navigation />
      <LogoWrapper>
        <Logo src={logo} alt="Adshares " />
        <Title> Publisher demo site </Title>
        <Subtitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Subtitle>
      </LogoWrapper>
    </Main>
  )
}

export default MainPage
