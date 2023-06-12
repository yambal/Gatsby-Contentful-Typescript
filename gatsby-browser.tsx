import { ThemeProvider } from "@mui/material"
import React from "react"

import { theme } from './src/theme/theme'
import { DrawerProvider, useDrawer } from './src/hooks/useDrawer'

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <DrawerProvider>
        {element}
      </DrawerProvider>
    </ThemeProvider>
  )
}