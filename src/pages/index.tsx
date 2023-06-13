import * as React from "react"
import { PageProps, graphql } from "gatsby"
import useSiteMetadata from "../hooks/useSiteMetadata"

import { css } from "@emotion/react"
import {} from '@emotion/react/types/css-prop'

import { Layout } from "../components/Layout"
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const IndexPage = (props:PageProps<Queries.IndexPageQuery>) => {
  const { title, siteUrl } = useSiteMetadata()
  const { allContentfulBlog } = props.data

  return (
    <Layout
      siteTitle={title}
      drawerContents={<>Drawer</>}
      drawerWidth={240}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Hi
      </Typography>
      <Button variant="contained">Hello World</Button>
    </Layout>
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
