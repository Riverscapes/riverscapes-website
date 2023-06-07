import * as React from 'react';
import propTypes from "prop-types"
import Typography from '@mui/material/Typography';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItemLink from '../treeItemLink';
import * as SideNavStyles from "./sideNav.module.css"

const SideNav = ( {heading, headingType, showHeading, content, theme} ) => {

  const navHeading = (showHeading)?
      <Typography 
        className={SideNavStyles.sideNavHeading}
        component={headingType}
        variant="h2">
       {heading}
      </Typography>:
      ''


  const renderTree = (nodes, key, level) => {
    const nextLevel = level + 1
    const currentKey = `${level}${key}`
    return(
      <TreeItemLink key={currentKey} nodeId={`${currentKey}`} to={nodes.url} label={nodes.title}>
        {Array.isArray(nodes.items)
          ? nodes.items.map((node, nodekey) => renderTree(node, `${level}${nodekey}`, `${nextLevel}` ))
          : null}
      </TreeItemLink>
    )
  }
  const contentItem = (node) => {
    const level = 0
    return (
      node.map((item, key) => {
        return (
          renderTree(item, key, `${level}`)
        )
      })
    )
  }

  const themeStyle = (theme === "white")?SideNavStyles.sideNavWhite:''
  
  return (
    <div className={`${SideNavStyles.sideNav} ${themeStyle}`}>
      {navHeading}
      <TreeView
        aria-label="Side Navigation"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        {contentItem(content.items)}
      </TreeView>
      </div>
  );
}

export default SideNav

SideNav.propTypes = {
  heading: propTypes.string,
  headingType: propTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5']),
  content: propTypes.oneOfType([
    propTypes.array,
    propTypes.object
  ]).isRequired,
  showHeading: propTypes.bool.isRequired,
  theme: propTypes.oneOf(['white', 'none'])
}

SideNav.defaultTypes = {
  heading: '',
  headingType: 'h2',
  content: [],
  showHeading: true,
  theme: `none`
}