require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://ohmink.github.io/",
    title: "KOM's Blog",
    author: "OhMin Kwon",
    description:
      "웹 개발 지식을 정리하는 소박한 공간, 권오민 블로그, 프론트엔드 개발",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://ohmink.github.io",
        sitemap: [
          "https://ohmink.github.io/sitemap/sitemap-index.xml",
          "https://ohmink.github.io/sitemap/sitemap-0.xml",
        ],
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.TRACKING_ID,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
        google: {
          families: ["Merriweather", "Noto Sans Korean"],
        },
      },
    },
  ],
};
