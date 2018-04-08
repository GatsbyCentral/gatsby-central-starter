module.exports = {
  siteMetadata: {
    title: "Gatsby Central Starter",
    siteUrl: "https://www.gatsbycentral.com"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-resolve-src",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography.js"
      }
    }
  ]
};
