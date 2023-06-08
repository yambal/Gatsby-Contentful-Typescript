import React from "react"
import {
  ThemeProvider,
  Preflight,
  ColorModeProvider
} from '@xstyled/styled-components'
import {
  theme,
  GlobalStyle
} from './src/theme/'

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Preflight />
        <GlobalStyle />
        {element}
      </>
    </ThemeProvider>
  )
}