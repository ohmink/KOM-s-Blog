import * as React from "react";
import {
  header,
  headerTitle,
  headerContents,
  headerContentsSearch,
} from "./header.module.css";
import { StaticImage } from "gatsby-plugin-image";

const Header = () => {
  function openSearch() {
    const $searchLayout = document.getElementById("search-layout");
    if ($searchLayout) {
      $searchLayout.style.display = "flex";

      const $searchInput = document.getElementById("search-input");
      $searchInput.focus();
    }
  }

  return (
    <header className={header}>
      <a
        href={process.env.HOME_PAGE_URL}
        rel="noreferrer"
        className={headerTitle}
      >
        KOM's Blog
      </a>
      <div className={headerContents}>
        <button
          type="button"
          onClick={openSearch}
          className={headerContentsSearch}
        >
          <StaticImage
            placeholder="tracedSVG"
            alt="Search"
            src="../images/search_icon.png"
            height={20}
          />
        </button>
        <p>Contact</p>
        <a href="https://github.com/ohmink" rel="noreferrer" target="_blank">
          Github
        </a>
      </div>
    </header>
  );
};

export default Header;
