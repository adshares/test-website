import styled from 'styled-components'
import {AdBanner} from "../AdBanners/AdBanners";

export const LargeBanner = styled(AdBanner)`
grid-area: half-page;
  @media only screen and (max-width: 767px) {
  margin: 0 auto;
    margin-bottom: 40px;
    border-radius: 10px;
justify-content: center;
  }

`;
export const ArticlesSection = styled.section`
  max-width: 1460px;
  margin: 40px auto;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 1fr);
  grid-template-areas:"article-1" "half-page" "article-2" "article-3" "article-4"  ;
  background-color: rgba(242, 242, 242, 0.85);
  grid-gap: 30px;

  @media only screen and (min-width: 1024px) {
    height: auto;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 1fr;
    grid-template-areas: "half-page article-2  article-2 article-3  " "half-page article-4 article-1  article-1 ";
  }
 
`

export const Article = styled.article`
  grid-area: ${props => `article-${props.index}`};
  background-color: ${props => props.bgColor || ''};
  background: ${props => `linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)),  ${props.bgImg} ` || ''};
  background-size: ${props => props.bgSize || 'cover'};
  background-position: top;
  min-height: 280px;
  padding: 40px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (min-width: 1024px) {
    height: 200px;
    padding: 24px 35px 35px;
    justify-content: flex-end;
    transition: transform 0.2s linear;
    background-position: ${props => props.bgPosition || ''};
  }
  
  @media only screen and (min-width: 1024px) {
    margin-bottom: 10px;
    border-radius: 10px;
    
    &:hover {
      transform: scale(1.02);
    }
    
  }
`;

export const ArticleTitle = styled.h2`
  font-size: ${props => props.fontSize || '24px'};
  font-weight: 600;
  margin-bottom: 20px;
  color: ${props => props.color || `var(--white)`};
  
    @media only screen and (min-width: 1024px) {
      font-size: ${props => props.fontSize || '24px'};
    }
`;

export const IconWrapper = styled.div`
  height: 31px;
  width: 31px;
  align-self: flex-start;
  border-radius: 50%;
`;
