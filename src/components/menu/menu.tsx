/**
 * Menu component
 */

import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import MainMenu from './mainMenu'
import * as menuStyles from './menu.module.css'

interface MenuProps {
  horizontal?: boolean
  invert?: boolean
  menuOption?: 'full' | 'list'
  mobileMenuState?: boolean
}

const Menu: React.FC<MenuProps> = ({
  horizontal = false,
  invert = false,
  menuOption = 'list',
  mobileMenuState = false,
}) => {
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

  const menuDirection = horizontal ? menuStyles.horizontal : ''
  const textColor = invert ? menuStyles.invert : ''

  const listMenu = (menu) => {
    return menu.map((link, key) => (
      <div key={key}>
        <Link to={link.url}>{link.title}</Link>
      </div>
    ))
  }

  return (
    <div className={`${menuStyles.menu} ${menuDirection} ${textColor}`}>
      {menuOption === 'list' ? listMenu(menu) : <MainMenu mobileMenuState={mobileMenuState} />}
    </div>
  )
}

export default Menu
