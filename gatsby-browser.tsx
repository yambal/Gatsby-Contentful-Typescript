import { ThemeProvider } from "@mui/material"
import React from "react"

import { theme } from './src/theme/theme'
import { DrawerProvider } from './src/providers/DrawerProvider'

export const wrapRootElement = ({ element }) => {
  return (
    <DrawerProvider>
      {element}
    </DrawerProvider>
  )
}