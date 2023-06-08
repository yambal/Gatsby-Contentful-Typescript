import React from "react"
import {
  ThemeProvider,
  Preflight,
  ColorModeProvider
} from '@xstyled/styled-components'
import {
  theme,
} from './src/theme'
import {
  GlobalStyle
} from './src/GlobalStyle'

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <>
          <Preflight />
          <GlobalStyle />
          {element}
        </>
      </ColorModeProvider>
    </ThemeProvider>
  )
}