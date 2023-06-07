/**
 * Main Menu component using MUI
 */

import React, {useState, useRef, useEffect} from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Button, ButtonGroup, Slide, Box, Popper, Paper, MenuItem, ClickAwayListener } from "@mui/material"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import SearchIcon from '@mui/icons-material/Search'
import SideNav from "../sideNav"
import * as menuStyles from "./menu.module.css"

const MainMenu = ( {mobileMenuState}    ) => {
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

    const [anchorEl, setAnchorEl] = useState([])

    const containerRef = useRef(null)
    const menuRef = useRef([])

    useEffect(() => {
        menuRef.current = menuRef.current.slice(0, menu.length);
     }, [menu]);

    // const open = Boolean(anchorEl);
    const handleClick = (event) => {
        const id = event.currentTarget.id
        const newArr = [...anchorEl]
        newArr[id] = menuRef.current[id]
        setAnchorEl(newArr)
    }
    const handleClose = (event) => {
        const newArr = []
        setAnchorEl(newArr)
    }

    const mobileMenu = {
        items: menu
    }

    return (
        <div className={`main-menu ${menuStyles.mainMenu}`}>
            <div className={`main-menu-small ${menuStyles.mainMenuSmall}`}>
                <Box 
                    sx={{ overflow: 'hidden'}} 
                    ref={containerRef}
                >
                    <Slide 
                        direction="down" 
                        in={mobileMenuState} 
                        appear={false} 
                        container={containerRef.current} 
                        mountOnEnter 
                        unmountOnExit
                    >
                        <Paper >
                            <SideNav
                                content={mobileMenu}
                                theme='white'
                                showHeading={false} />
                        </Paper>
                    </Slide>
                </Box>
            </div>
            <div className={`main-menu-large ${menuStyles.mainMenuLarge}`}>
            { menu.map((link, key) => (
                (link.items)?
                    <React.Fragment key={key}>
                        <ButtonGroup 
                            variant="text" 
                            aria-label="dropdown menu"
                            ref={el => menuRef.current[key] = el} 
                            className={menuStyles.buttonGroup}>
                            <Button 
                                component={Link} 
                                to={link.url}
                                key={key}
                                className={menuStyles.menuButton}
                            >
                            {link.title}
                            </Button>
                            <Button
                                id={`${key}`}
                                aria-haspopup="true"
                                aria-controls={anchorEl[`${key}`] ? `menu-${key}` : undefined}
                                aria-expanded={anchorEl[`${key}`] ? 'true' : undefined}
                                onClick={handleClick}
                                className={menuStyles.menuButton}
                            >
                            <KeyboardArrowDownIcon />
                            </Button>
                        </ButtonGroup>
                        <Popper
                            id={`menu-${key}`}
                            open={Boolean(anchorEl[`${key}`])}
                            anchorEl={anchorEl[`${key}`]}
                            placement="bottom-start"
                        >
                            <ClickAwayListener onClickAway={handleClose}>
                                <Paper
                                    square
                                    className={menuStyles.paperMenu}
                                >
                                {link.items.map((dropdownItem, itemIndex) => (
                                    <MenuItem 
                                        key={itemIndex}
                                        onClick={handleClose}
                                        className={menuStyles.dropdownMenuItem}
                                        divider
                                    >
                                        <Link
                                            to={dropdownItem.url}
                                            className={menuStyles.dropdownMenuItemLink}
                                        >
                                            <KeyboardArrowRightIcon 
                                                fontSize="small"
                                                className={menuStyles.menuIcon}
                                            />
                                            {dropdownItem.title}
                                        </Link>
                                    </MenuItem>
                                ))}
                                </Paper>
                            </ClickAwayListener>
                        </Popper>
                    </React.Fragment>:
                    <Button
                        component={Link} 
                        to={link.url}
                        key={key}
                        className={menuStyles.menuButton}
                        startIcon={(link.title==="Search")?<SearchIcon />:''}
                        variant="text"
                    >
                        {link.title}
                    </Button>
                ))
            }
            </div>
        </div>
    )
}

export default MainMenu

