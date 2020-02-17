module.exports = {
  siteMetadata: {
    title: 'Bhavishya kumar| Developer & Designer',
    social: [
      {
        name: `github`,
        url: `https://github.com/bhavish23`,
      },
    ],
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Lato'],
        },
      },
    },
  ],
}