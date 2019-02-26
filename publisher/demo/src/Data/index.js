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
    zoneId: '85550B058FC74FAAB5819EF410204DAD',
};

const leaderboard = {
    width: BannerSizes['leaderboard'].width,
    height: BannerSizes['leaderboard'].height,
    hideUnder: BannerSizes['leaderboard'].width,
    publisherId: 0,
    zoneId: '2BC0FCA670F74D4C8B048D8CFF2DD867',
};

const leaderboard2 = {
    width: BannerSizes['leaderboard'].width,
    height: BannerSizes['leaderboard'].height,
    hideUnder: BannerSizes['leaderboard'].width,
    publisherId: 0,
    zoneId: '60D6A9C246D64B9C8F094E792DAC2DC0',
};

const leaderboard3 = {
    width: BannerSizes['leaderboard'].width,
    height: BannerSizes['leaderboard'].height,
    hideUnder: BannerSizes['leaderboard'].width,
    publisherId: 0,
    zoneId: 'E77BCC6DCE61464BBC4F35F9443D1F47',
};

const largeMobileBanner = {
    height: BannerSizes['large-mobile-banner'].height,
    width: BannerSizes['large-mobile-banner'].width,
    hideAbove: '767px',
    publisherId: 0,
    zoneId: '4813552BD3754ED78752AA027BF0A6F3',
};

const largeMobileBanner2 = {
    height: BannerSizes['large-mobile-banner'].height,
    width: BannerSizes['large-mobile-banner'].width,
    hideAbove: '767px',
    publisherId: 0,
    zoneId: 'A6CFAF567B774B719CD6FEA3F9BC218D',
};

const largeMobileBanner3 = {
    height: BannerSizes['large-mobile-banner'].height,
    width: BannerSizes['large-mobile-banner'].width,
    hideAbove: '767px',
    publisherId: 0,
    zoneId: 'D98F05A0753045938E4F7561D829B83B',
};

const largeRectangle = {
    height: BannerSizes['large-rectangle'].height,
    width: BannerSizes['large-rectangle'].width,
    hideAbove: '767px',
    publisherId: 0,
    zoneId: '6AB1B004E1884CA1B32BC7FE8B7A889B',
};

const largeRectangle2 = {//unused
    height: BannerSizes['large-rectangle'].height,
    width: BannerSizes['large-rectangle'].width,
    hideAbove: '767px',
    publisherId: 0,
    zoneId: '51968EDF94BB4EDABCB5EFD14169A71B',
};

const wideSkyscraper = {
    height: BannerSizes['wide-skyscraper'].height,
    width: BannerSizes['wide-skyscraper'].width,
    hideUnder: '1024px',
    publisherId: 0,
    zoneId: '575961F04FF341048169322F082F5A5B',
};

const wideSkyscraper2 = {
    height: BannerSizes['wide-skyscraper'].height,
    width: BannerSizes['wide-skyscraper'].width,
    hideUnder: '1024px',
    publisherId: 0,
    zoneId: '00A000A34302492EA5730CF05C59C80E',
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
