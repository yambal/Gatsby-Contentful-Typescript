import * as React from "react"
import { PageProps, graphql } from "gatsby"
import useSiteMetadata from "../hooks/useSiteMetadata"

import { css } from "@emotion/react"
import {} from '@emotion/react/types/css-prop'

import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';

const IndexPage = (props:PageProps<Queries.IndexPageQuery>) => {
  const { title, siteUrl } = useSiteMetadata()
  const { allContentfulBlog } = props.data
  const { edges } = allContentfulBlog

  const underline = css`
    text-decoration: underline;
  `

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {title}
      </Typography>
      <Button variant="contained">Hello World</Button>
      {edges.map((edge, i) => {
        return (  
          <div key={i}>
            {edge.node.title}
          </div>
        )
      })}
      </Box>
    </Container>
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
