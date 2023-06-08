import * as React from "react"
import { PageProps, graphql } from "gatsby"
import useSiteMetadata from "../hooks/useSiteMetadata"
import { x } from "@xstyled/styled-components"

const IndexPage = (props:PageProps<Queries.IndexPageQuery>) => {
  const { title, siteUrl } = useSiteMetadata()
  const { allContentfulBlog } = props.data
  const { edges } = allContentfulBlog

  return (
    <x.div>
      <x.h1>{title}</x.h1>
      {edges.map((edge, i) => {
        return (  
          <div key={i}>
            {edge.node.title}
          </div>
        )
      })}
    </x.div>
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
