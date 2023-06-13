import * as React from "react"
import { PageProps, graphql } from "gatsby"
import useSiteMetadata from "../hooks/useSiteMetadata"

import { css } from "@emotion/react"
import {} from '@emotion/react/types/css-prop'


import Box from '@mui/material/Box'

import { Header } from "../components/Header"
import { Drawer } from "@mui/material"
import { useDrawer } from '../hooks/useDrawer'
import { Providers } from "../hooks/Providers"
import Typography from '@mui/material/Typography'
import { AppBar, IconButton, Toolbar } from "@mui/material"

/**
 * Drawer
 * https://mui.com/material-ui/react-drawer/#responsive-drawer
 */

type LayoutProps = {
  siteTitle: string
  drawerContents: React.ReactNode
  children: React.ReactNode
  drawerWidth: number
}

export const Layout = ({
  siteTitle,
  drawerContents,
  children,
  drawerWidth
}: LayoutProps) => {

  const { title, siteUrl } = useSiteMetadata()
  const { isOpen, toggle, close } = useDrawer()

  return (
    <Providers>
      <Box sx={{ display: 'flex'}}>
        <Header
          drawerWidth={drawerWidth}
          onMenuClick={toggle}
          headerTitle={
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              {title}
            </Typography>
          }
        />
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
          <Drawer
            anchor='left'
            open={isOpen}
            onClose={close}
            variant="temporary"
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawerContents}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            {drawerContents}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` }

          }}
        >
          <Toolbar />
          {children}
        </Box>
      </Box>
    </Providers>
  )
}