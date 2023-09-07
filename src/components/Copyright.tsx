/**
 * Footer component
 */

import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Container, Stack, Typography } from '@mui/material'
import { Link } from 'gatsby'

export const Copyright: React.FC = () => {
  return (
    <Container maxWidth={'xl'}>
      <Stack
        direction="row"
        justifyContent={'flex-end'}
        alignItems={'center'}
        gap={3}
        sx={{
          color: 'white',
          p: [2, 'auto'],
        }}
      >
        <Link to={`https://creativecommons.org/licenses/by/4.0/`} target="_blank">
          <StaticImage
            layout={'constrained'}
            formats={['auto', 'webp', 'avif']}
            src="../images/icon-copyright.png"
            width={36}
            quality={100}
            alt="copyright logo"
            placeholder="none"
          />
        </Link>
        <Link to={`https://creativecommons.org/licenses/by/4.0/`} target="_blank">
          <StaticImage
            layout={'constrained'}
            formats={['auto', 'webp', 'avif']}
            src="../images/icon-person.png"
            width={36}
            quality={100}
            alt="Person logo"
            placeholder="none"
          />
        </Link>
        <Typography variant="body1">Riverscapes Consortium</Typography>
      </Stack>
    </Container>
  )
}
