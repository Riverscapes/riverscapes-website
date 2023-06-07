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
        "title": "About us",
        "url": "/",
        "items": [
          {
            "title": "child",
            "url": "/"
          },
          {
            "title": "child 2",
            "url": "/"
          }
        ]
      },
      {
        "title": "Our work",
        "url": "/our-work/",
        "items": [
          {
            "title": "Data Exchange",
            "url": "/our-work/data-exchange"
          },
          {
            "title": "Apps",
            "url": "/our-work/apps"
          }
        ]
      },
      {
        "title": "Impact stories",
        "url": "/"
      },
      {
        "title": "Workshops & events",
        "url": "/"
      },
      {
        "title": "Get involved",
        "url": "/"
      },
      {
        "title": "Contact",
        "url": "/"
      },
      {
        "title": "Search",
        "url": "/search"
      }
    ]
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-mdx-source-name`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/content/blog`,
    //     name: `blog`,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `page`,
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
              className: `header-link-icon`
            }
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
