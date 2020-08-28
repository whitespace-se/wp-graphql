import React from "react"
import { graphql } from "gatsby"
import { Layout } from "@reflexjs/gatsby-theme-core"
import { Doc } from "./doc"

export default ({ data }) => (
    <Layout pathname={data.doc.uri}>
        <Doc {...data.doc} previousDoc={data.prev} nextDoc={data.next} />
    </Layout>
)

export const query = graphql`
  query($id: String, $prev: String, $next: String) {
    doc: wpDocument(id: { eq: $id }) {
      ...DocFragment
    }
    prev: wpDocument(id: { eq: $prev }) {
      ...DocFragment
    }
    next: wpDocument(id: { eq: $next }) {
      ...DocFragment
    }
  }
`
