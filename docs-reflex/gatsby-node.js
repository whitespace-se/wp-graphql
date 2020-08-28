const TurndownService = require("turndown")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allWpDocument {
        nodes {
          id
          uri
        }
      }
    }
  `)

  if (result.errors) {
    reporter.error("There was an error fetching docs.", result.errors)
  }

  const { nodes } = result.data.allWpDocument

  if (nodes.length) {
    nodes.forEach((doc) => {
      actions.createPage({
        path: doc.uri,
        component: require.resolve(`./src/templates/docs/single-doc.js`),
        context: {
          id: doc.id,
          uri: doc.uri,
        },
      })
    })
  }
}

// SEE: https://www.shubho.dev/coding/wordpress-html-to-markdown-for-gatsby/
// async function onCreateNode({
//                                 node,
//                                 actions,
//                                 createNodeId,
//                                 createContentDigest,
//                                 reporter
//                             }, {
//                                 headingStyle = 'setext',
//                                 hr = '* * *',
//                                 bulletListMarker = '*',
//                                 codeBlockStyle = 'fenced',
//                                 fence = '```',
//                                 emDelimiter = '_',
//                                 strongDelimiter = '**',
//                                 linkStyle = 'inlined',
//                                 linkReferenceStyle = 'full',
//                                 turndownPlugins = []
//                             } = {}) {
//     const {createNode, createParentChildLink} = actions;
//     if (node.internal.type !== 'WpDocument' && node.internal.type !== 'WpDocument') {
//         return;
//     }
//     const options = {
//         headingStyle,
//         hr,
//         bulletListMarker,
//         codeBlockStyle,
//         fence,
//         emDelimiter,
//         strongDelimiter,
//         linkStyle,
//         linkReferenceStyle
//     };
//     const turndownService = new TurndownService(options);
//     if (turndownPlugins.length > 0) {
//         turndownPlugins.forEach((plugin) => {
//             if (plugin === 'turndown-plugin-gfm') {
//                 const turndownPluginGfm = require('turndown-plugin-gfm');
//                 const gfm = turndownPluginGfm.gfm;
//                 turndownService.use(gfm);
//             }
//         });
//     }
//
//     try {
//         const content = node.content;
//         const contentMarkDown = content ? turndownService.turndown(content) : null;
//         let markdownNode = {
//             id: createNodeId(`${node.id}-markdown`),
//             children: [],
//             parent: node.id,
//             childOf: node.id,
//             internal: {
//                 type: `WpMarkdown`,
//                 mediaType: `text/markdown`,
//                 content: contentMarkDown,
//             },
//         };
//         markdownNode.internal.contentDigest = createContentDigest(markdownNode);
//         createNode(markdownNode);
//         createParentChildLink({parent: node, child: markdownNode});
//         return markdownNode;
//     } catch (err) {
//         reporter.panicOnBuild(
//             `Error processing WordPress posts to Markdown
//             ${node.title} - ${err.message}`
//         );
//
//         return {}
//     }
// }
//
// exports.onCreateNode = onCreateNode;
