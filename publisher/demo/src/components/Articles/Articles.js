import React from 'react'
import {
    Article,
    ArticlesSection,
    ArticleTitle,
    LargeBanner,
} from './ArticlesStyled'
import {Link} from '../Atoms/atoms'

const Articles = ({
                      largeBanner,
                      largeBannerMobile,
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
            <LargeBanner publisherId={largeBannerMobile.publisherId}
                         zoneId={largeBannerMobile.zoneId}
                         height={largeBannerMobile.height}
                         margin='0'
                         width={largeBannerMobile.width}
                         position={'static'}
                         right={largeBannerMobile.right || ''}
                         hideUnder={largeBannerMobile.hideUnder || ''}
                         hideAbove={largeBannerMobile.hideAbove || ''}> </LargeBanner>
            <LargeBanner publisherId={largeBanner.publisherId}
                         zoneId={largeBanner.zoneId}
                         height={largeBanner.height}
                         margin='0'
                         width={largeBanner.width}
                         position={'static'}
                         right={largeBanner.right || ''}
                         hideUnder={largeBanner.hideUnder || ''}
                         hideAbove={largeBanner.hideAbove || ''}> </LargeBanner>
            {Articles}
            {children}
        </ArticlesSection>
    )
}

export default Articles
