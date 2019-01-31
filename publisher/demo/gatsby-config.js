module.exports = {
    siteMetadata: {
        title: 'Adshares',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                includePaths: ['absolute/path/a', 'absolute/path/b'],
                name: 'Adshares',
                short_name: '',
                start_url: '/',
                display: 'minimal-ui',
                icon: 'src/assets/icons/favicon.png', // This path is relative to the root of the site.
            }
        },
        {
            resolve: 'gatsby-plugin-offline',
            options: {
                dontCacheBustUrlsMatching: /(\.js$|\.css$|\/static\/)/,
                runtimeCaching: [
                    {
                        urlPattern: /(\.js$|\.css$|\/static\/)/,
                        handler: `cacheFirst`,
                    },
                    {
                        urlPattern: /^https?:\/\/(www\.demo-site\.adshares.net|localhost:8000|localhost:9000|staging\.mysite\.com).*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
                        handler: `staleWhileRevalidate`,
                    },
                    {
                        urlPattern: /^https?:\/\/fonts\.googleapis\.com\/css/,
                        handler: `staleWhileRevalidate`,
                    },
                ],
            }
        }

    ],
};
