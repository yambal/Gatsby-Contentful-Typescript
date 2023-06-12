import * as React from "react"
import { Drawer, ThemeProvider } from "@mui/material"
import { theme } from '../theme/theme'

type ProvidersProps = {
  children: React.ReactNode
}

export const Providers = ({children}: ProvidersProps) => {
  return (
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
  )
}