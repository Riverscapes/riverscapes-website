import * as React from "react"
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles'
import { theme } from '../muiTheme'
import Header from "./header/header"
import Footer from "./footer/footer"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div 
      className="global-wrapper"
      data-is-root-path={isRootPath}
    >
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </StyledEngineProvider>
    </div>
  )
}

export default Layout
