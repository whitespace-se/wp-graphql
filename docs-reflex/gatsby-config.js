require(`dotenv`).config()

module.exports = {
  siteMetadata: {
    title: "WPGraphQL",
    description: "Documentation for WPGraphQL",
    siteUrl: process.env.SITE_URL || "http://localhost:8000",
  },
  plugins: [
    `@reflexjs/gatsby-theme-base`,
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url: `http://wpgqldocs.local/graphql`,
      },
    },
  ],
}
