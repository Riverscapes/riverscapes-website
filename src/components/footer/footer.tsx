/**
 * Footer component
 */

import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Menu from '../menu'

/* Content */
import footerContent from '../../../content/utilities/footer.json'

/* Footer style */
import * as footerStyles from './footer.module.css'
import { Copyright } from './copyright'

const Footer: React.FC = () => {
  const data = useStaticQuery(graphql`
    query Query {
      site {
        siteMetadata {
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const social = data.site.siteMetadata?.social

  return (
    <footer className={footerStyles.container}>
      <StaticImage
        className={footerStyles.background}
        layout="fullWidth"
        formats={['auto', 'webp', 'avif']}
        src="../../images/background-footer.jpg"
        quality={95}
        alt="Wave Pattern"
      />
      <div className={footerStyles.content}>
        <div>
          <Link to="/">
            <StaticImage
              layout="constrained"
              formats={['auto', 'webp', 'avif']}
              src="../../images/logo.png"
              width={228}
              quality={100}
              alt="Riverscapes Consortium logo"
              placeholder="none"
            />
          </Link>
        </div>
        <div>
          <p className={footerStyles.headline}>{footerContent.contact.heading}</p>
          <p className={footerStyles.text} dangerouslySetInnerHTML={{ __html: footerContent.contact.content }} />
        </div>
        <div>
          <p className={footerStyles.headline}>{footerContent.link.heading}</p>
          <Menu invert />
        </div>
        <div>
          <p className={footerStyles.headline}>{footerContent.follow.heading}</p>
          <a href={`https://twitter.com/${social?.twitter || ``}`}>
            <StaticImage
              layout={'constrained'}
              formats={['auto', 'webp', 'avif']}
              src="../../images/icon-twitter.png"
              width={36}
              quality={100}
              alt="Twitter logo"
              placeholder="none"
            />
          </a>
        </div>
      </div>
      <hr />
      <Copyright />
    </footer>
  )
}

export default Footer
