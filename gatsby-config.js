module.exports = {
  siteMetadata: {
    title: 'DOLO',
    description: 'Decentralized Open Learning Organization'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'dolo',
        short_name: 'dolo',
        start_url: '/',
        background_color: '#c3b59b',
        theme_color: '#5d3f97',
        display: 'minimal-ui',
        icon: 'src/images/dolo__avatar.jpg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
  ],
}
