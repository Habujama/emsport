const tailwindConfig = require('./tailwind.config.js')
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `eM Sport Slaný`,
    description: `Kola, lyže, bajky pro všechny sporťáky.`,
    author: `Hanka Myšková`,
    keywords: ['fun', 'sport', 'service'],
    icon: 'src/assets/header/favicona.png',
    image: 'src/assets/header/emsport-tym-cely.png',
    siteUrl: 'https://www.kolaslany.cz/',
    lang: 'cs',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `eM Sport Slaný`,
        description: 'Kola, lyže, bajky pro všechny sporťáky',
        categories: ['sports', 'health & fitness'],
        short_name: `eMSport`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: 'src/assets/header/favicona.png',
        icon_options: {
          purpose: 'any maskable',
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-webfonts',
      options: {
        fonts: {
          google: [
            {
              family: 'Roboto',
              subsets: ['latin-ext'],
              variants: ['100', '300', '400', '500', '700', '900'],
              strategy: 'cdn',
            },
          ],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [
          require('tailwindcss')(tailwindConfig),
          require('autoprefixer'),
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `${__dirname}/src/assets/svg/`,
        },
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}
