import * as React from "react"
import { HeadFC, PageProps, graphql } from "gatsby"
import styled from "styled-components"

const MainWrapper = styled.div`
  color: black;
`

const IndexPage = (props:PageProps<Queries.IndexPageQuery>) => {
  const { allContentfulBlog } = props.data
  const { edges } = allContentfulBlog
  return (
    <MainWrapper>
      {edges.map((edge) => {
        return (
          <div>
            {edge.node.title}
          </div>
        )
      })}
    </MainWrapper>
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
