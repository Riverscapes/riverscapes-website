import * as React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Box, Divider, Typography, useTheme } from '@mui/material'

// import Bio from "../components/bio"
import Button from '../components/LinkButton'
import Hero from '../components/Hero'
import HomepageCard, { HomepageCardContent, HomepageCardHighlight, HomepageCardStat } from '../components/homepageCards'

// import PageContent from "../../content/utilities/page.json"

const MDXRender: React.FC<React.PropsWithChildren> = ({ children }) => {
  const theme = useTheme()

  const shortcodes: Record<string, any> = {
    HomepageCard,
    HomepageCardContent,
    HomepageCardHighlight,
    HomepageCardStat,
    Button,
    Hero,
  }

  const hStyles = {
    mt: 8,
    mb: 6,
    '&:hover': {
      '& .header-link-icon': {
        display: 'block',
      },
    },
  }

  return (
    <MDXProvider
      components={{
        ...shortcodes,
        h1: ({ children }) => (
          <Typography variant="h1" sx={hStyles}>
            {children}
          </Typography>
        ),
        h2: ({ children }) => (
          <Typography variant="h2" sx={hStyles}>
            {children}
          </Typography>
        ),
        h3: ({ children }) => (
          <Typography variant="h3" sx={hStyles}>
            {children}
          </Typography>
        ),
        h4: ({ children }) => (
          <Typography variant="h4" sx={hStyles}>
            {children}
          </Typography>
        ),
        h5: ({ children }) => (
          <Typography variant="h5" sx={hStyles}>
            {children}
          </Typography>
        ),
        h6: ({ children }) => (
          <Typography variant="h6" sx={hStyles}>
            {children}
          </Typography>
        ),
        a: ({ children, className, href, ...props }) => {
          const target = href.startsWith('http') ? '_blank' : undefined
          if (className && className.indexOf('header-link-icon') >= 0)
            return (
              <Box
                className={className}
                component="a"
                href={href}
                {...(props as any)}
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  transform: 'translateX(-100%)',
                  pr: '4px',
                  display: 'none',
                }}
              >
                {children}
              </Box>
            )
          return (
            <Typography
              component="a"
              target={target}
              href={href}
              {...(props as any)}
              sx={{
                textDecoration: 'none',
                color: theme.palette.text.primary,
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              {children}
            </Typography>
          )
        },
        p: ({ children }) => (
          <Typography
            paragraph
            sx={{
              mt: 4,
            }}
          >
            {children}
          </Typography>
        ),
        hr: () => (
          <Divider
            sx={{
              border: '2px solid #B4CE00',
              backgroundColor: '#B4CE00',
              color: '#B4CE00',
            }}
          />
        ),
        li: ({ children }) => (
          <Typography
            component="li"
            sx={{
              mt: 1,
            }}
          >
            {children}
          </Typography>
        ),
        blockquote: ({ children }) => (
          <Typography
            component={'blockquote'}
            sx={{
              color: theme.palette.info.main,
              fontFamily: '"JetBrains Mono", "Courier New", sans-serif',
              maxWidth: theme.breakpoints.values.xl,
              mt: 4,
              '& p': {
                // px: 2,
                fontSize: '1.95rem',
                //   margin: [0, 'auto'],
              },
            }}
          >
            {children}
          </Typography>
        ),
      }}
    >
      {children}
    </MDXProvider>
  )
}

export default MDXRender
