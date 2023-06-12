import * as React from "react"
import { PageProps, graphql } from "gatsby"
import useSiteMetadata from "../hooks/useSiteMetadata"

import { css } from "@emotion/react"
import {} from '@emotion/react/types/css-prop'

import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import { Header } from "../components/Header"
import { Drawer } from "@mui/material"
import { useDrawer } from '../hooks/useDrawer'
import { Providers } from "../hooks/Providers"

const IndexPage = (props:PageProps<Queries.IndexPageQuery>) => {
  const { title, siteUrl } = useSiteMetadata()
  const { allContentfulBlog } = props.data
  const { edges } = allContentfulBlog

  const underline = css`
    text-decoration: underline;
  `

  const { isOpen, toggle } = useDrawer()

  return (
    <Providers>
      <Header />
      <Drawer
        anchor='left'
        open={isOpen}
        onClose={toggle}
      >
        <div css={{width: '400px'}}>drower</div>
      </Drawer>
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {title}
        </Typography>
        <Button variant="contained" onClick={toggle}>Hello World</Button>
        {edges.map((edge, i) => {
          return (  
            <div key={i}>
              {edge.node.title}
            </div>
          )
        })}
        </Box>
      </Container>
    </Providers>
  )
}

export default IndexPage

export const Head = () => {
  const { title, siteUrl } = useSiteMetadata()
  return (<title>{title}</title>)
}

export const query = graphql`
  query IndexPage {
    allContentfulBlog {
      edges {
        node {
          id
          title
          updatedAt
          contentful_id
        }
      }
    }
  }
`
