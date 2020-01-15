module.exports = {
  siteMetadata: {
    title: 'Kyle Gill | Developer & Designer',
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/gill_kyle`,
      },
      {
        name: `github`,
        url: `https://github.com/gillkyle`,
      },
    ],
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-favicon',
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