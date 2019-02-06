module.exports = {
    siteMetadata: {
        title: 'Adshares',
    },
    plugins: [
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'Adshares DEMO site',
                short_name: 'Adshares DEMO',
                start_url: '/',
                display: 'minimal-ui',
                icon: 'src/assets/icons/favicon.png', // This path is relative to the root of the site.
            }
        },
    ],
};
