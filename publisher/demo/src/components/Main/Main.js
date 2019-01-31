import React from 'react'
import {
  Logo,
  LogoWrapper,
  Main,
  Title,
} from './MainStyled'

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
        <LogoWrapper>
        <Logo src={logo} alt="Adshares " />
        <Title> Publisher demo site </Title>
      </LogoWrapper>
    </Main>
  )
};

export default MainPage
