import styled from 'styled-components'
import {Link} from "../Atoms/atoms";

export const FooterElement = styled.footer`
  max-width: 1860px;
  width: 100%;
  margin: 0 auto;
  padding: 80px 5vw;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--blue);
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    height: 20vh;
    padding: 0;
    justify-content: center;
    flex-direction: row;
  }
`;

export const BottomInfo = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    max-width: 1460px;
    margin: 0 auto;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ImageLink = styled(Link)`
  height: 30px;
  
  &:not(:last-of-type){
  margin-right: 16px;  
  }
`;

export const Icon = styled.img`
  height: 20px;
  width: 20px;
 
`;

export const Address = styled.address`
  display: flex;
  flex-direction: column;
  color: var(--white);
  @media only screen and (max-width: 768px) {
   align-items: center;
  }
`;

export const SocialMedia = styled.section`
  display: flex;

  @media only screen and (max-width: 768px) {
    margin-top: 24px;
  }
`;

export const CompanyName = styled.span`
  margin-bottom: 16px;
  font-size: 20px;
  line-height: 1.5;
  font-weight: 500;
  letter-spacing: 1px;
  white-space: nowrap;

  @media only screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const LocationDetail = styled.span`
  font-size: 18px;
  line-height: 1.3;
`;

export const Email = styled.a`
  font-size: 16px;
  line-height: 1.3;
  margin-top: 16px;
  color: var(--white);
`;
