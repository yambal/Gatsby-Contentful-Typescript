import { Global, css } from "@emotion/react"
import React from "react"

import { normalize } from "polished"

export const GlobalStyle = () => {
  return (
    <Global styles={css`
      ${normalize()}
      body {
        font-family: 'Noto Sans JP', sans-serif;
        font-weight: 400;
      }
    `}/>
  )
}