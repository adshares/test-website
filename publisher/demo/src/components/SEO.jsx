import React from 'react';
import Helmet from 'react-helmet';

const SEO = ({config, serverLink}) => {
    const title = config.siteTitle;
    const realPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix;
    const image = config.siteUrl + realPrefix + config.siteLogo;
    const blogURL = config.siteUrl + config.pathPrefix;
    const schemaOrgJSONLD = [
        {
            '@context': 'http://schema.org',
            '@type': 'WebSite',
            url: blogURL,
            name: title,
            alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
        },
    ];

    return (
        <Helmet>
            <html lang={config.siteLanguage}/>
            <title>{title}</title>
            <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png"/>
            <link rel="icon" href="favicon.png"/>
            <meta name="msapplication-TileColor" content={config.backgroundColor}/>
            <meta name="msapplication-config" content="browserconfig.xml"/>
            <meta name="description" content={config.siteDescription}/>
            <meta name="image" content={image}/>
            <meta name="keywords" content={config.siteKeywords}/>
            <meta name="description" content={config.siteDescription}/>
            <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
            <script src={serverLink} async/>
        </Helmet>
    );
};

export default SEO;
