import article1 from "../assets/cats/cat-1.jpg";
import article2 from "../assets/cats/cat-2.jpg";
import article3 from "../assets/cats/cat-3.jpg";
import article4 from "../assets/cats/cat-4.jpg";
import article5 from "../assets/cats/cat-5.jpg";
import article6 from "../assets/cats/cat-6.jpg";
import logo from "../assets/adshares-logo.svg";
import {BannerSizes} from "../../../config/bannerConfig";

const config = {
    pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"
    siteTitle: 'Veterinarian publisher', // Navigation and Site Title
    siteTitleAlt: 'Site about cats', // Alternative Site title for SEO
    siteUrl: '/', // Domain of your site. No trailing slash!
    siteLanguage: 'en', // Language Tag on <html> element
    siteLogo: logo, // Used for SEO and manifest
    siteDescription: '',
    siteKeywords: 'accio:200142, Pets: Cats',
};

const banners = [
    {
        height: BannerSizes['wide-skyscraper'].height,
        width: BannerSizes['wide-skyscraper'].width,
        position: 'fixed',
        top: '20vh',
        left: '0',
        hideUnder: '1790px',
        publisherId: 3,
        zoneId: 8,
    },
    {
        height: BannerSizes['wide-skyscraper'].height,
        width: BannerSizes['wide-skyscraper'].width,
        position: 'fixed',
        top: '20vh',
        right: '0',
        hideUnder: '1790px',
        publisherId: 6,
        zoneId: 9,
    },
    {
        width: BannerSizes['large-leaderboard'].width,
        height: BannerSizes['large-leaderboard'].height,
        hideUnder: BannerSizes['banner'].width,
        publisherId: 6,
        zoneId: 10,
    },
    {
        height: BannerSizes['mobile-banner'].height,
        width: BannerSizes['mobile-banner'].width,
        hideUnder: BannerSizes['mobile-banner'].width,
        hideAbove: BannerSizes['banner'].width,
        publisherId: 6,
        zoneId: 11,
    },
];

const articles = [
    {
        backgroundImage: `url("${article1}")`,
        backgroundPosition: 'bottom',
        title: 'Donec posuere tellus in elit malesuada, ut lacinia ligula pharetra',
        href: 'https://adshares.net/',
    },
    {
        backgroundImage: `url("${article2}")`,
        backgroundPosition: 'bottom',
        title: 'Donec posuere tellus in elit malesuada,',
        href: 'https://adshares.net/',
    },

    {
        backgroundImage: `url("${article3}")`,
        backgroundPosition: 'bottom',
        title: 'Duis blandit eleifend nunc. Ut hendrerit dapibus risus, sed blandit risus tempor sit amet.',
        href: 'https://adshares.net/',
    },

    {
        backgroundImage: `url("${article4}")`,
        backgroundPosition: 'center',
        title: 'Duis iaculis turpis quis ante euismod, in molestie ligula dictum. ',
        href: 'https://adshares.net/',
    },
    {
        backgroundImage: `url("${article5}")`,
        title: 'Ut hendrerit dapibus risus, sed blandit risus tempor sit amet.',
        href: 'https://twitter.com/adsharesnet',
    },
    {
        backgroundImage: `url("${article6}")`,
        backgroundPosition: 'center',
        title: 'Integer pretium enim ipsum. Nunc blandit ligula et dui volutpat, vitae dapibus dui scelerisque. ',
        href: 'https://adshares.net/',
    },
];

export default {
    config,
    articles,
    banners
}
