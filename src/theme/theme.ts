import { createTheme } from "@mui/material"

/**
 * see
 * https://zenn.dev/longbridge/articles/c100d0311ed1be
 */
export const theme = createTheme({
  typography: {
    fontFamily: "'Noto Sans JP', sans-serif",
  },
  palette: {
    mode: 'light'
  }
})