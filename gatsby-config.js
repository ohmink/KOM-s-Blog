module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "KOM's Blog",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "whatisthis?",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
  ],
};
