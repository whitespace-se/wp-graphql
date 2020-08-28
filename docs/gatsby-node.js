exports.createSchemaCustomization = ({ actions }) => {
    actions.createTypes(`
        type File implements Node @infer {
            childMarkdownRemark: MarkdownRemark
        }

        type MarkdownRemark implements Node @infer {
            frontmatter: MarkdownRemarkFrontmatter
            fields: MarkdownRemarkFields
        }

        type MarkdownRemarkFields {
            image: String
            version: String
            slug: String
            graphManagerUrl: String
        }

        type MarkdownRemarkFrontmatter {
            title: String
            subtitle: String
            description: String
        }
    `)
}

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type !== "Page") {
        return
    }

    createNodeField({
        node,
        name: "chrome",
        value: node.chrome ? node.chrome : true,
    })
}
