import { graphql } from "gatsby"

export const fragment = graphql`
  fragment DocFragment on WpDocument {
    id
    title
    content
    uri
  }
`
