import styled from 'styled-components'

export const FooterElement = styled.footer`
  max-width: 1860px;
  margin: 0 auto;
  padding: 80px 5vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--blue);

  @media only screen and (min-width: 768px) {
    height: 20vh;
    padding: 0;
    justify-content: center;
    align-items: center;
  }
`;

export const BottomInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    max-width: 1460px;
    margin: 0 auto;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Address = styled.address`
  display: flex;
  flex-direction: column;
  color: var(--white);
`;

export const CompanyName = styled.span`
  margin-bottom: 8px;
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
  font-size: 18px;
  line-height: 1.3;
  margin-top: 16px;
  color: var(--white);
`;
