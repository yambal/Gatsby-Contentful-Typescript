import {
  defaultTheme,
} from '@xstyled/styled-components'
import { th } from "@xstyled/system";

export const theme = {
  ...defaultTheme,
  // Customize your theme here

  defaultColorModeName: 'normal',
  colors: {
    primary: "#E398E6",
    darkBlue: "#2C1D3E",
    bg: "#fff",
    text: "#333",
    link: "#006688",
    navbarBg: th.color("primary"),
    codeBg: th.color("primary"),
  }
}