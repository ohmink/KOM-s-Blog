import * as React from "react";
import { indexPage, indexContents } from "./index.module.css";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql } from "gatsby";
import SideBar from "../components/sidebar";

const IndexPage = ({ data }) => {
  return (
    <main className={indexPage}>
      <SideBar />
      <div className={indexContents}>
        <title>Home Page</title>
        <h1>Welcome to my Gatsby site!</h1>
        <p>I'm making this by following the Gatsby Tutorial.</p>

        <ul>
          {data.allMdx.nodes.map((node) => (
            <article key={node.id}>
              <p>{node.frontmatter.title}</p>
              <p>{node.frontmatter.date}</p>
              <MDXRenderer>{node.body}</MDXRenderer>
            </article>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default IndexPage;

export const query = graphql`
  query MyQuery {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        body
      }
    }
  }
`;
