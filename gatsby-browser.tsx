import { ThemeProvider } from "@mui/material"
import React from "react"

import { theme } from './src/theme/theme'

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      {element}
    </ThemeProvider>
  )
}