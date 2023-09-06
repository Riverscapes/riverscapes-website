/**
 * TreeItemLink component
 */

import * as React from 'react'
import { Link } from 'gatsby'
import TreeItem, { TreeItemProps } from '@mui/lab/TreeItem'

interface TreeItemLinkProps extends TreeItemProps {
  to: string
  label: string
  children: React.ReactNode
}

const TreeItemLink: React.FC<TreeItemLinkProps> = ({ to, label, children, ...rest }) => {
  return (
    <TreeItem label={<Link to={to}>{label}</Link>} {...rest}>
      {children}
    </TreeItem>
  )
}

export default TreeItemLink
