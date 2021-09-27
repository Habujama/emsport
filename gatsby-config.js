const tailwindConfig = require('./tailwind.config.js')

module.exports = {
  siteMetadata: {
    title: `eM Sport Slaný`,
    description: `Kola, lyže, bajky pro všechny sporťáky.`,
    author: `@gatsbyjs`,
    keywords: ['fun'],
    lang: 'cs',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        description: 'Gatsby Starter Package',
        categories: ['education', 'entertainment'],
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: 'src/assets/header/favicona.png', // This path is relative to the root of the site.
        icon_options: {
          // For all the options available, please see the additional resources below.
          purpose: 'any maskable',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-webfonts',
      options: {
        fonts: {
          google: [
            {
              family: 'Roboto',
              subsets: ['latin-ext'],
              // 100, 300, 700, 900 are Rentier specific
              variants: ['100', '300', '400', '500', '700', '900'],
              strategy: 'cdn',
            },
            {
              family: 'Barlow Semi Condensed',
              subsets: ['latin-ext'],
              variants: ['100', '300', '400', '500', '800'],
              strategy: 'cdn',
            },
          ],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-prettier-eslint',
      options: {
        prettier: {
          patterns: [
            // the pattern "**/*.{js,jsx,ts,tsx}" is not used because we will rely on `eslint --fix`
            '**/*.{css,scss,less}',
            '**/*.{json,json5}',
            '**/*.{graphql}',
            '**/*.{md,mdx}',
            '**/*.{html}',
            '**/*.{yaml,yml}',
          ],
        },
        eslint: {
          patterns: '**/*.{js,jsx,ts,tsx}',
          customOptions: {
            fix: true,
            cache: true,
          },
        },
      },
    },
    `gatsby-plugin-react-helmet`,
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
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-loadable-components-ssr`,
      options: {
        // Whether replaceHydrateFunction should call ReactDOM.hydrate or ReactDOM.render
        // Defaults to ReactDOM.render on develop and ReactDOM.hydrate on build
        useHydrate: true,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/header/favicona.png`, // This path is relative to the root of the site.
        icon_options: {
          purpose: 'any maskable',
        },
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
