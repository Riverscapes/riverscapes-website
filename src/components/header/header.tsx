/**
 * Header component
 */

import React, { useState } from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Button } from '@mui/material'
import Menu from '../menu'
import MenuIcon from '@mui/icons-material/Menu'
import * as headerStyles from './header.module.css'

const Header: React.FC = () => {
  const [mobileMenu, setMobileMenu] = useState(false)

  const handleMobileMenuChange = () => {
    setMobileMenu((prev) => !prev)
  }

  return (
    <header className={headerStyles.container}>
      <div className={headerStyles.content}>
        <div className={headerStyles.logo}>
          <Link to="/">
            <StaticImage
              layout="constrained"
              formats={['auto', 'webp', 'avif']}
              src="../../images/logo.png"
              width={228}
              quality={100}
              loading="eager"
              alt="Riverscapes Consortium logo"
              placeholder="none"
            />
          </Link>
        </div>
        <div className={headerStyles.menuButton}>
          <Button onClick={handleMobileMenuChange} variant="text" sx={{ color: '#fff' }} startIcon={<MenuIcon />}>
            Menu
          </Button>
        </div>
        <div className={headerStyles.menu}>
          <Menu menuOption="full" horizontal mobileMenuState={mobileMenu} invert />
        </div>
      </div>
      <StaticImage
        layout="fullWidth"
        formats={['auto', 'webp', 'avif']}
        src="../../images/header-border.png"
        quality={95}
        alt="Wave Pattern"
      />
    </header>
  )
}

export default Header
