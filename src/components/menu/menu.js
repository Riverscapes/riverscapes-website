/**
 * Menu component
 */

import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import propTypes from "prop-types"
import MainMenu from "./mainMenu"
import * as menuStyles from "./menu.module.css"

const Menu = ({horizontal, invert, menuOption, mobileMenuState}) => {
    const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          menuLinks {
            url
            title
            items {
                url
                title
            }
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const menu = data.site.siteMetadata.menuLinks

  const menuDirection = (horizontal)?menuStyles.horizontal:''
  const textColor = (invert)?menuStyles.invert:''



  const listMenu = (menu) => {
    return (
        menu.map((link, key) => (
          <div key={key}>
          <Link to={link.url}>
              {link.title}
          </Link>
          </div>
        ))
    )
  }
  
  return (
    <div className={`${menuStyles.menu} ${menuDirection} ${textColor}`}>
      {(menuOption==="list")?
          listMenu(menu):
          <MainMenu 
            mobileMenuState={mobileMenuState}
          />
      }
    </div>
  )
}

Menu.propTypes = {
    horizontal: propTypes.bool,
    invert: propTypes.bool,
    menuOption: propTypes.oneOf(['full', 'list']),
    mobileMenuState: propTypes.bool
}
Menu.defaultProps = {
    horizontal: false,
    invert: false,
    menuOption: 'list',
    mobileMenuState: false
}

export default Menu

