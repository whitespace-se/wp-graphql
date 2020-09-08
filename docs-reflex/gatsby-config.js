require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "WPGraphQL",
    description: "Documentation for WPGraphQL",
    siteUrl: process.env.SITE_URL,
  },
  plugins: [
    `@reflexjs/gatsby-theme-base`,
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url: process.env.WPGRAPHQL_URL,
      },
    },
  ],
}
