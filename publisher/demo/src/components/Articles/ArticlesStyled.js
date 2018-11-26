import styled from 'styled-components'

export const ArticlesSection = styled.section`
  max-width: 1460px;
  margin: 40px auto;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 1fr);
  grid-template-areas:"article-1" "article-2" "article-3" "article-4" "article-5" "article-6" ;
  background-color: rgba(242, 242, 242, 0.95);
  grid-gap: 30px;

  @media only screen and (min-width: 1224px) {
    height: auto;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr 1fr;
    grid-template-areas: "article-1 article-2 article-3" "article-4 article-5 article-6";
  }
 
`

export const Article = styled.article`
  grid-area: ${props => `article-${props.index}`};
  background-color: ${props => props.bgColor || ''};
  border-radius: 10px;
  background: ${props => `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)),  ${props.bgImg} ` || ''};
  background-size: ${props => props.bgSize || 'cover'};
  background-position: ${props => props.bgPosition || ''};
  min-height: 280px;
  padding: 40px;
  margin-bottom: 32px;

  @media only screen and (min-width: 1024px) {
    margin-bottom: 0;
    height: 400px;
    display: flex;
    padding: 64px;
    justify-content: flex-end;
    flex-direction: column;
    transition: transform 0.2s linear;

    &:hover {
      transform: scale(1.02);
    }
  }
`

export const ArticleTitle = styled.h2`
  font-size: ${props => props.fontSize || '24px'};
  font-weight: 600;
  margin-bottom: 32px;
  color: ${props => props.color || `var(--white)`};
`

export const IconWrapper = styled.div`
  height: 31px;
  width: 31px;
  align-self: flex-start;
  border-radius: 50%;
`
