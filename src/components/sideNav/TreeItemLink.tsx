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
    <TreeItem
      sx={{
        '& .MuiTreeItem-content': {
          borderBottom: '1px solid #bbcd3f',
          py: 1,
        },
        '& .MuiTreeItem-label': {
          fontSize: '1.2rem',
        },
        '& .MuiTreeItem-group': {
          ml: 0,
        },
        '& a': {
          textDecoration: 'none',
        },
        '& .MuiTreeItem-iconContainer': {
          color: '#0661C1',
        },
      }}
      label={<Link to={to}>{label}</Link>}
      {...rest}
    >
      {children}
    </TreeItem>
  )
}

export default TreeItemLink
