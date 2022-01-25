import * as React from "react";
import {
  header,
  headerTitle,
  headerContents,
  headerContentsSearch,
} from "./header.module.css";
import { StaticImage } from "gatsby-plugin-image";
import { themeStateContext, themeDispatchContext } from "../../themeProvider";

const Header = ({ searchRef }) => {
  const theme = React.useContext(themeStateContext);
  const themeDispatch = React.useContext(themeDispatchContext);

  function openSearch() {
    searchRef.current.display();
    searchRef.current.focus();
  }

  function changeThmem() {
    if (theme.mode === "light") themeDispatch({ type: "dark" });
    else themeDispatch({ type: "light" });
  }

  return (
    <header className={header}>
      <a href={process.env.SITE_URL} rel="noreferrer" className={headerTitle}>
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
            src="../../../images/search_icon.png"
            height={20}
          />
        </button>
        <p onClick={changeThmem}>Theme</p>
        <a href="https://github.com/ohmink" rel="noreferrer" target="_blank">
          Github
        </a>
      </div>
    </header>
  );
};

export default Header;
