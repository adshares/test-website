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
      },
    },
    'gatsby-plugin-offline',
  ],
}
