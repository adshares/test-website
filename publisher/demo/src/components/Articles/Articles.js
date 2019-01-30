import React from 'react'
import {
    Article,
    ArticlesSection,
    ArticleTitle, LargeBanner,
} from './ArticlesStyled'
import {Link} from '../Atoms/atoms'
import Banners, {AdBanner} from "../AdBanners/AdBanners";

const Articles = ({
                      largeBanner,
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
