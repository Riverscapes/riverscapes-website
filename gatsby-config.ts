import { GatsbyConfig } from 'gatsby'

module.exports = {
  // You need pathPrefix if you're hosting GitHub Pages at a Project Pages or if your
  // site will live at a subdirectory like https://example.com/mypathprefix/.
  pathPrefix: '/riverscapes-website',
  siteMetadata: {
    title: `Riverscapes Consortium`,
    // Just leave this empty ('') if you don't want a help widget in the footer
    helpWidgetId: '153000000178',
    author: {
      name: `Joe Wheaton`,
    },
    description: ``,
    siteUrl: `https://riverscapes.github.io/riverscapes-website/`,
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
    {
      resolve: '@riverscapes/gatsby-theme',
      options: {
        contentPath: `${__dirname}/content/page`,
        manifest: {
          name: `Riverscapes Consortium`,
          short_name: `Riverscapes`,
          start_url: `/riverscapes-website`,
        },
      },
    },
  ],
} as GatsbyConfig
