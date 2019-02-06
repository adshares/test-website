import styled from 'styled-components'

export const TextSection = styled.section`
  margin: 64px auto;
  padding: 0 30px;
  display: flex;  
  flex-direction: column;
  max-width: 1200px;
  
  @media only screen and (max-width: 767px) {
    padding: 0 40px;
  }
`;

export const Title = styled.h1`
  display: flex;
  justify-self: center;
  text-align: center;
  
  @media only screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Content = styled.p`
margin-right: ${props => props.marginRight || '0'};
  font-size: 20px;
  font-family: Georgia,Cambria,"Times New Roman",Times,serif;
  
  @media only screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const ContentWraper = styled.div`

  font-size: 20px;
  font-family: Georgia,Cambria,"Times New Roman",Times,serif;
      display: flex;
    flex-direction: column;
    justify-content: space-around;
  
  @media only screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
    
    @media only screen and (min-width: 1024px) {
    margin-right: ${props => props.marginRight || '0'};
    margin-left: ${props => props.marginLeft || '0'};
  }
`;
export const ContentWithImage = styled.div`
margin-right: ${props => props.marginRight || '0'};
  font-size: 20px;
  font-family: Georgia,Cambria,"Times New Roman",Times,serif;
  
  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
@media screen and (min-width:700px) {
  display: flex;
  justify-content: space-between;
}
`;

