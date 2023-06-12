import * as React from "react"

import { AppBar, IconButton, Toolbar } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import useSiteMetadata from "../hooks/useSiteMetadata";

export const Header = () => {
  const { title, siteUrl } = useSiteMetadata()
  return (
    <AppBar>
      <Toolbar>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            {title}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}