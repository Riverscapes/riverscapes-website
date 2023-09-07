/**
 * LinkButton component
 */

import * as React from 'react'
import { Button } from '@mui/material'
import { Link as GatsbyLink } from 'gatsby'

interface LinkButtonProps {
  to: string
  children: React.ReactNode
}

const LinkButton: React.FC<LinkButtonProps> = ({ to, children }) => {
  const CustomLinkStub = (props, ref) => <GatsbyLink to={to} {...props} ref={ref} />
  const CustomLink = React.forwardRef(CustomLinkStub)

  return (
    <Button
      variant="contained"
      color="info"
      component={CustomLink}
      sx={{
        color: 'white',
        mt: 4,
      }}
    >
      {children}
    </Button>
  )
}

export default LinkButton
