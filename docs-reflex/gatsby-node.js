exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allWpContentNode {
        nodes {
          __typename
          id
          databaseId
          uri
        }
      }
    }
  `)

  if (result.errors) {
    reporter.error("There was an error fetching docs.", result.errors)
  }

  const { nodes } = result.data.allWpContentNode

  if (nodes.length) {
    nodes.forEach((doc) => {
      if (doc.uri.length) {
        actions.createPage({
          path: doc.uri,
          component: require.resolve(`./src/components/single-content-node.js`),
          context: {
            id: doc.id,
            uri: doc.uri,
          },
        })
      }
    })
  }

}
