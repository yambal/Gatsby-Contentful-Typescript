import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `GatsbyContentfulTs`,
    siteUrl: `https://www.yourdomain.tld`
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        "accessToken": "V69CGoYaQsSK6G-i1aWMcwFAUhBAlUoKHA0nw1SHnKk",
        "spaceId": "m384l1bmwphi"
      }
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components"
  ]
};

export default config;
