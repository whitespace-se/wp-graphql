import React from "react"
import { graphql } from "gatsby"
import { Layout } from "@reflexjs/gatsby-theme-core"
import { Doc } from "./doc"

export default ({ data }) => (
  <Layout pathname={data.doc.uri ? data.doc.uri : data.doc.id}>
    <Doc {...data.doc} previousDoc={data.prev ? data.prev : null} nextDoc={data.next ? data.next : null} />
  </Layout>
)

export const query = graphql`
  query($id: String, $prev: String, $next: String) {
    doc: wpContentNode(id: { eq: $id }) {
      ...DocFragment
    }
    prev: wpContentNode(id: { eq: $prev }) {
      ...DocFragment
    }
    next: wpContentNode(id: { eq: $next }) {
      ...DocFragment
    }
  }
`
