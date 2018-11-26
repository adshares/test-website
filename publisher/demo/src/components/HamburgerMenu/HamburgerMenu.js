import React from 'react'
import { HamburgerButton, Line } from './HamburgerStyled'
import { AccessibilityInfo } from '../Atoms/atoms'

const HamburgerMenu = ({ showMobileMenu, hideMobileMenu }) => {
  return (
    <HamburgerButton onClick={showMobileMenu} onBlur={hideMobileMenu}>
      <Line />
      <Line />
      <Line />
      <AccessibilityInfo>menu</AccessibilityInfo>
    </HamburgerButton>
  )
};

export default HamburgerMenu
