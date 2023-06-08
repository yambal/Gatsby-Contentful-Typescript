import * as React from "react"
import { HeadFC, PageProps, graphql } from "gatsby"

const IndexPage = (props:PageProps<Queries.IndexPageQuery>) => {
  const { allContentfulBlog } = props.data
  const { edges } = allContentfulBlog
  return (
    <main>
      {edges.map((edge) => {
        return (
          <div>
            {edge.node.title}
          </div>
        )
      })}
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>

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
