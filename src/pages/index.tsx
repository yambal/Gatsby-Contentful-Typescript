import * as React from "react"
import { PageProps, graphql } from "gatsby"
import useSiteMetadata from "../hooks/useSiteMetadata"

import { css } from "@emotion/react"
import {} from '@emotion/react/types/css-prop'

import Button from '@mui/material/Button';

const IndexPage = (props:PageProps<Queries.IndexPageQuery>) => {
  const { title, siteUrl } = useSiteMetadata()
  const { allContentfulBlog } = props.data
  const { edges } = allContentfulBlog

  const underline = css`
    text-decoration: underline;
  `

  return (
    <div>
      <h1 css={underline}>{title}</h1>
      <Button variant="contained">Hello World</Button>
      {edges.map((edge, i) => {
        return (  
          <div key={i}>
            {edge.node.title}
          </div>
        )
      })}
    </div>
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
