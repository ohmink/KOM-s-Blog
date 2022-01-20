import { graphql, Link, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import * as Styles from "./search-modal.module.css";

const Search = (_props, ref) => {
  const searchRef = React.useRef();
  const inputRef = React.useRef();

  React.useImperativeHandle(ref, () => ({
    display: () => {
      searchRef.current.style.display = "flex";
    },
    focus: () => {
      inputRef.current.focus();
    },
  }));

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
          id
        }
      }
    }
  `).allMdx.nodes.map((node) => {
    node.frontmatter.key = node.frontmatter.title.toLowerCase();
    return node;
  });

  const [result, setResult] = React.useState(nodes);

  function closeModal(e) {
    const $target = e.target;
    if ($target.id === "search-layout") e.target.style.display = "none";
  }

  function onChange(e) {
    const value = String(e.target.value).toLowerCase();
    setResult(nodes.filter((node) => node.frontmatter.key.includes(value)));
  }

  function mouseOver(e) {
    const $target = e.target.closest(`.${Styles.searchResultItem}`);
    if ($target) $target.style.backgroundColor = "#45858c";
  }

  function mouseOut(e) {
    const $target = e.target.closest(`.${Styles.searchResultItem}`);
    if ($target) $target.style.backgroundColor = "#eee";
  }

  return (
    <div
      className={Styles.search}
      id="search-layout"
      onClick={closeModal}
      onKeyDown={closeModal}
      role="none"
      ref={searchRef}
    >
      <div className={Styles.searchModal}>
        <div className={Styles.searchInputLayout}>
          <span>
            <StaticImage
              placeholder="tracedSVG"
              alt="Search"
              src="../../../images/search_icon.png"
              width={20}
              height={20}
            />
          </span>
          <input
            type="search"
            id="search-input"
            placeholder="제목으로 문서 검색"
            ref={inputRef}
            onChange={onChange}
          />
        </div>
        <div className={Styles.searchContentTitle}>Documentation</div>
        <ul
          className={Styles.searchResult}
          onMouseOver={mouseOver}
          onMouseOut={mouseOut}
          onFocus={mouseOver}
          onBlur={mouseOut}
        >
          {result.map((node) => (
            <li key={node.id} className={Styles.searchResultItem}>
              <Link to={`/post/${node.slug}`}>
                <span>
                  <StaticImage
                    placeholder="tracedSVG"
                    alt="document"
                    src="../../../images/documentation_icon.png"
                    width={25}
                    height={25}
                  />
                </span>
                <p>{node.frontmatter.title}</p>
                <span>
                  <StaticImage
                    placeholder="tracedSVG"
                    alt="document"
                    src="../../../images/arrow_icon.png"
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

export default React.forwardRef(Search);
