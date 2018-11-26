import React from 'react'
import {
  Article,
  ArticlesSection,
  ArticleTitle,
} from './ArticlesStyled'
import { Link } from '../Atoms/atoms'

const Articles = ({
  articlesData,
  children,
  gridMobile,
  gridDesktop,
  rowsDesktop,
}) => {
  const Articles = articlesData.map((article, index) => (
    <Article index={index + 1}
             key={`${article.title}_${index}`}
             bgImg={article.backgroundImage}
             bgColor={article.backgroundColor}
             bgPosition={article.backgroundPosition}>
      <ArticleTitle color={article.color}>{article.title}</ArticleTitle>
      <Link href={article.href} color={article.color && 'var(--blue)'}>
        {' '}
        READ{' '}
      </Link>
    </Article>
  ))

  return (
    <ArticlesSection
      gridMobile={gridMobile}
      gridDesktop={gridDesktop}
      rowsDesktop={rowsDesktop}
    >
      {Articles}
      {children}
    </ArticlesSection>
  )
}

export default Articles
