import { graphql, Link, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import {
  search,
  searchModal,
  searchInputLayout,
  searchContentTitle,
  searchResult,
  searchResultItem,
} from "./search-modal.module.css";

function closeModal(e) {
  const $target = e.target;
  if ($target.id === "search-layout") e.target.style.display = "none";
}

const Search = () => {
  const nodes = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            tag
            date
          }
          slug
        }
      }
    }
  `).allMdx.nodes.map((node) => {
    node.frontmatter.key = node.frontmatter.title.toLowerCase();
    return node;
  });
  const [result, setResult] = React.useState(nodes);

  function onChange(e) {
    const value = String(e.target.value).toLowerCase();
    setResult(nodes.filter((node) => node.frontmatter.key.includes(value)));
  }

  function mouseOver(e) {
    const $target = e.target.closest(`.${searchResultItem}`);
    if ($target) $target.style.backgroundColor = "#45858c";
  }

  function mouseOut(e) {
    const $target = e.target.closest(`.${searchResultItem}`);
    if ($target) $target.style.backgroundColor = "#eee";
  }

  React.useEffect(() => {
    const $searchResult = document.querySelector(`.${searchResult}`);
    $searchResult.addEventListener("mouseover", mouseOver);
    $searchResult.addEventListener("mouseout", mouseOut);
  }, [result]);

  return (
    <div
      className={search}
      id="search-layout"
      onClick={closeModal}
      onKeyDown={closeModal}
      role="none"
    >
      <div className={searchModal}>
        <div className={searchInputLayout}>
          <span>
            <StaticImage
              placeholder="tracedSVG"
              alt="Search"
              src="../images/search_icon.png"
              width={20}
              height={20}
            />
          </span>
          <input
            type="search"
            id="search-input"
            placeholder="제목으로 문서 검색"
            onChange={onChange}
          />
        </div>
        <div className={searchContentTitle}>Documentation</div>
        <ul className={searchResult}>
          {result.map((node) => (
            <li key={`search-result-${node.slug}`} className={searchResultItem}>
              <Link to={`/post/${node.slug}`}>
                <span>
                  <StaticImage
                    placeholder="tracedSVG"
                    alt="document"
                    src="../images/documentation_icon.png"
                    width={25}
                    height={25}
                  />
                </span>
                <p>{node.frontmatter.title}</p>
                <span>
                  <StaticImage
                    placeholder="tracedSVG"
                    alt="document"
                    src="../images/arrow_icon.png"
                    width={20}
                    height={20}
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Search;
