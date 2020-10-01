import { graphql } from "gatsby"

export const fragment = graphql`
  fragment DocFragment on WpDocument {
    id
    ...on WpNodeWithTitle {
      title
    }
    ...on WpNodeWithContentEditor {
      content
    }
    ...on WpUniformResourceIdentifiable {
      uri
    }
  }
`
