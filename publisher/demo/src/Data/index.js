import article5 from "../assets/articles-bg/bloackchain-advertising.jpeg";
import article2 from "../assets/articles-bg/butterfly.jpeg";
import article3 from "../assets/articles-bg/money.jpeg";
import article6 from "../assets/articles-bg/vintage.jpeg";
import logo from "../assets/adshares-logo.svg";
import {BannerSizes} from "../../../config/bannerConfig";

const config = {
    pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"
    siteTitle: 'Adshares demo site', // TextContent and Site Title
    siteTitleAlt: 'Site about cats', // Alternative Site title for SEO
    siteUrl: '/', // Domain of your site. No trailing slash!
    siteLanguage: 'en', // Language Tag on <html> element
    siteLogo: logo, // Used for SEO and manifest
    siteDescription: '',
    siteKeywords: 'Pets: Cats',
};

const largeBanner = {
    height: BannerSizes['half-page'].height,
    width: BannerSizes['half-page'].width,
    hideUnder: '1024px',
    position: 'fixed',
    publisherId: 0,
    zoneId: `${process.env.GATSBY_ZONE_LARGE_BANNER}`,
};

const leaderboard = {
    width: BannerSizes['leaderboard'].width,
    height: BannerSizes['leaderboard'].height,
    hideUnder: BannerSizes['leaderboard'].width,
    publisherId: 0,
    zoneId: `${process.env.GATSBY_ZONE_LEADERBOARD}`,
};

const leaderboard2 = {
    width: BannerSizes['leaderboard'].width,
    height: BannerSizes['leaderboard'].height,
    hideUnder: BannerSizes['leaderboard'].width,
    publisherId: 0,
    zoneId: `${process.env.GATSBY_ZONE_LEADERBOARD2}`,
};

const leaderboard3 = {
    width: BannerSizes['leaderboard'].width,
    height: BannerSizes['leaderboard'].height,
    hideUnder: BannerSizes['leaderboard'].width,
    publisherId: 0,
    zoneId: `${process.env.GATSBY_ZONE_LEADERBOARD3}`,
};

const largeMobileBanner = {
    height: BannerSizes['large-mobile-banner'].height,
    width: BannerSizes['large-mobile-banner'].width,
    hideAbove: '767px',
    publisherId: 0,
    zoneId: `${process.env.GATSBY_ZONE_LARGE_MOBILE_BANNER}`,
};

const largeMobileBanner2 = {
    height: BannerSizes['large-mobile-banner'].height,
    width: BannerSizes['large-mobile-banner'].width,
    hideAbove: '767px',
    publisherId: 0,
    zoneId: `${process.env.GATSBY_ZONE_LARGE_MOBILE_BANNER2}`,
};

const largeMobileBanner3 = {
    height: BannerSizes['large-mobile-banner'].height,
    width: BannerSizes['large-mobile-banner'].width,
    hideAbove: '767px',
    publisherId: 0,
    zoneId: `${process.env.GATSBY_ZONE_LEADERBOARD3}`,
};

const largeRectangle = {
    height: BannerSizes['large-rectangle'].height,
    width: BannerSizes['large-rectangle'].width,
    hideAbove: '767px',
    publisherId: 0,
    zoneId: `${process.env.GATSBY_ZONE_LARGE_LARGE_RECTANGLE}`,
};

const largeRectangle2 = {//unused
    height: BannerSizes['large-rectangle'].height,
    width: BannerSizes['large-rectangle'].width,
    hideAbove: '767px',
    publisherId: 0,
    zoneId: `${process.env.GATSBY_ZONE_LARGE_LARGE_RECTANGLE2}`,
};

const wideSkyscraper = {
    height: BannerSizes['wide-skyscraper'].height,
    width: BannerSizes['wide-skyscraper'].width,
    hideUnder: '1024px',
    publisherId: 0,
    zoneId: `${process.env.GATSBY_ZONE_WIDE_SKYSCRAPER}`,
};

const wideSkyscraper2 = {
    height: BannerSizes['wide-skyscraper'].height,
    width: BannerSizes['wide-skyscraper'].width,
    hideUnder: '1024px',
    publisherId: 0,
    zoneId: `${process.env.GATSBY_ZONE_WIDE_SKYSCRAPER2}`,
};

const articles = [
    {
        backgroundImage: `url("${article2}")`,
        backgroundPosition: 'bottom',
        title: 'ADST to ADS — community-based conversion',
        href: 'https://medium.com/adshares/adst-to-ads-community-based-conversion-337e148f499f',
    },
    {
        backgroundImage: `url("${article3}")`,
        backgroundPosition: 'bottom',
        title: 'Adshares launches ADS Wallet. Another milestone on our journey to transform programmatic advertising.',
        href: 'https://medium.com/adshares/adshares-launches-ads-wallet-da820f10dc2f',
    },
    {
        backgroundImage: `url("${article5}")`,
        title: 'Blockchain in digital advertising. Did 2018 bring us closer to a breakthrough?',
        href: 'https://medium.com/adshares/blockchain-in-digital-advertising-did-2018-bring-us-closer-to-a-breakthrough-685c3c382167',
    },
    {
        backgroundImage: `url("${article6}")`,
        backgroundPosition: 'center',
        title: 'Proud to announce ADS going live',
        href: 'https://medium.com/adshares/proud-to-announce-ads-going-live-ddce9edaa7a8',
    },
];

export default {
    config,
    articles,
    largeBanner,
    leaderboard,
    leaderboard2,
    leaderboard3,
    largeMobileBanner,
    largeMobileBanner2,
    largeMobileBanner3,
    wideSkyscraper,
    wideSkyscraper2,
    largeRectangle,
    largeRectangle2
}
