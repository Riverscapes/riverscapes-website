/**
 * LinkButton component
 */

import * as React from 'react'
import Button from '@mui/material/Button'
import * as buttonStyles from './button.module.css'
import { GatsbyLinkProps } from 'gatsby'
import Link from '../link/link'

interface LinkButtonProps extends GatsbyLinkProps<unknown> {
  to: string
  children: React.ReactNode
}

const LinkButton: React.FC<LinkButtonProps> = ({ to, children }) => {
  return (
    <Button to={to} variant="contained" className={`${buttonStyles.button}`} component={Link}>
      {children}
    </Button>
  )
}

export default LinkButton
