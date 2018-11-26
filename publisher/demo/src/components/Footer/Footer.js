import React from 'react'
import {
  Address,
  BottomInfo,
  CompanyName,
  Email,
  FooterElement,
  LocationDetail,
} from './FooterStyled'

const Footer = () => (
  <FooterElement>
    <BottomInfo>
      <Address>
        <CompanyName>Publisher site</CompanyName>
        <LocationDetail> demo </LocationDetail>
        <Email href="mailto:office@adshares.net"> office@adshares.net </Email>
      </Address>
    </BottomInfo>
  </FooterElement>
);

export default Footer
