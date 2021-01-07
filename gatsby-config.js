const dotenv = require("dotenv")
dotenv.config()

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "YELP",
        // This is the field under which it's accessible
        fieldName: "yelp",
        // URL to query from
        url: "https://api.yelp.com/v3/graphql",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
        },
      },
    },
  ],
}
