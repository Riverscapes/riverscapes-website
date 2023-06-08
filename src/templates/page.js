import * as React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { Container, Grid, Typography } from '@mui/material'

// import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Banner from "../components/banner"
import SideNav from "../components/sideNav"
import ImgCard from "../components/card"

import * as PageStyles from "./page.module.css"

// import PageContent from "../../content/utilities/page.json"

const BlogPostTemplate = ({
  data: { site, mdx: page, allMdx: childPages },
  children,
  location,
}) => {
  const siteTitle = site.siteMetadata?.title || `Title`
  const pageHeading = (page.frontmatter.banner)?<Banner title={page.frontmatter.title}/>:<h1 itemProp="headline">{page.frontmatter.title}</h1>
  
  const cardsContent = childPages.nodes.map( (card, key) => {
    return (
      <Grid key={key} item xs={12} md={6} lg={3}>
        <ImgCard
          img={card.frontmatter.image?.childImageSharp?.gatsbyImageData}
          imgAlt={card.frontmatter.imageAlt}
          to={card.fields.slug}
          heading={card.frontmatter.title}
          headingVariant="h5"
        >
          <Typography variant="body2" color="text.secondary">
            {card.frontmatter.blurb}
          </Typography>
        </ImgCard>
      </Grid>
    )
  })

  return (
    <Layout location={location} title={siteTitle}>
      <article
        className={`page ${PageStyles.pageLayout}`}
        itemScope
        itemType="http://schema.org/Article"
      >
        {(!page.frontmatter.isHome)?
        <>
          <header className={PageStyles.header}>
            {pageHeading}
          </header>
          <div className={PageStyles.contentRegion}>
            <div className={`${PageStyles.pageContent}`}>
              <MDXProvider>{children}</MDXProvider>
            </div>
            {(page.tabletofContents !== null)?
              <aside className={`${PageStyles.sidebar}`}>
                <SideNav
                  heading="On this page"
                  headingType="h2"
                  content={page.tableOfContents}
                  showHeading />
              </aside>:''}
          </div>
          <Container maxWidth="xl" sx={{mb: 4}}>
              <Grid container spacing={4} sx={{ my: 3 }}>
                {cardsContent}
              </Grid>
            </Container>
          </>:
          <MDXProvider>{children}</MDXProvider>}
      </article>
    </Layout>
  )
}

export const Head = ({ data: { mdx: page } }) => {
  return (
    <Seo
      title={page.frontmatter.title}
      description={page.frontmatter.description}
    />
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
  ) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        banner
        isHome
      }
      tableOfContents(maxDepth: 3)
    }
    allMdx(filter: {fields: {slug: {regex: "/our-work\\//"}}}) {
      nodes {
        id
        fields {
          slug
        }
        frontmatter {
          description
          title
          blurb
          isHome
          imageAlt
          image {
            childImageSharp {
              gatsbyImageData(width: 800)
            }
          }
        }
      }
    }
  }
`
