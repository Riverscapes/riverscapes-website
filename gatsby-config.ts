/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Riverscapes Consortium`,
    author: {
      name: `Michael Kam`,
    },
    description: ``,
    siteUrl: `https://riverscapes.net/`,
    social: {
      twitter: `RiverscapesC`,
    },
    menuLinks: [
      {
        title: 'About us',
        url: '/about-us',
        items: [
          {
            title: 'What is a riverscape',
            url: '/about-us/what-is-a-riverscape',
          },
          {
            title: 'FAIR principles',
            url: '/about-us/fair-principles',
          },
        ],
      },
      {
        title: 'Our work',
        url: '/our-work/',
        items: [
          {
            title: 'Riverscapes Consortium Data Exchange',
            url: '/our-work/data-exchange',
          },
          {
            title: 'Riverscapes Consortium Applications',
            url: '/our-work/apps',
          },
          {
            title: 'Riverscapes Consortium Models',
            url: '/our-work/models',
          },
          {
            title: 'Data Standards and Compliance',
            url: '/our-work/standards',
          },
        ],
      },
      {
        title: 'Impact stories',
        url: '/',
      },
      {
        title: 'Workshops & events',
        url: '/workshops-events',
      },
      {
        title: 'Get involved',
        url: '/get-involved',
      },
      {
        title: 'Contact',
        url: '/',
      },
      {
        title: 'Search',
        url: '/search',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-mdx-source-name`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        ignore: [`**/\.*`],
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `page`,
        ignore: [`**/\.*`],
        path: `${__dirname}/content/page`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 992,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: `header-link-icon`,
            },
          },
          `gatsby-remark-prismjs`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Riverscapes Consortium`,
        short_name: `Riverscapes`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon/data-exchange-icon-64x64.png`, // This path is relative to the root of the site.
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
  ],
}
