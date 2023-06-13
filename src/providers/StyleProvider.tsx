import * as React from "react"
import { ThemeProvider } from "@mui/material"
import { theme, GlobalStyle } from '../theme'

type StyleProviderProps = {
  children: React.ReactNode
}

/**
 * スタイルに関するProvider
 * gatsby-browser.tsx に配置しても機能しない
 * @param param0 
 * @returns 
 */
export const StyleProvider = ({children}: StyleProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}