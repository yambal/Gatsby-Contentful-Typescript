import React from "react"
import {
  ThemeProvider,
  Preflight,
} from '@xstyled/styled-components'
import {
  theme
} from './src/theme'


export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <Preflight />
      {element}
    </ThemeProvider>
  )
}