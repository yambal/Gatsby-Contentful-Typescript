import * as React from "react"
import { HeadFC, PageProps, graphql } from "gatsby"
import styled from "styled-components"
import useSiteMetadata from "../hooks/useSiteMetadata"
import { x } from "@xstyled/styled-components"
import { useColorMode } from '@xstyled/styled-components'

const IndexPage = (props:PageProps<Queries.IndexPageQuery>) => {
  const { title, siteUrl } = useSiteMetadata()
  const { allContentfulBlog } = props.data
  const { edges } = allContentfulBlog
  const [colorMode, setColorMode] = useColorMode()

  const handleColor = React.useCallback(() => {
    setColorMode(colorMode === 'default' ? 'dark' : 'default')
  }, [colorMode])

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
      <x.button onClick={handleColor}>Color</x.button>
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
