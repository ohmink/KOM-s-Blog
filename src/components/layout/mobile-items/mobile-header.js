import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { mobileHeader } from "./mobile-header.module.css";
import ThemeToggle from "../layout-public/theme-toggle";

const MobileHeader = () => {
  const goGithub = () => window.open("https://github.com/ohmink");

  return (
    <header className={mobileHeader}>
      <a href={process.env.SITE_URL} rel="noreferrer">
        KOM's Blog
      </a>
      <div>
        {/* <button type="button">
          <StaticImage
            placeholder="tracedSVG"
            alt="email"
            src="../../../images/email_icon.png"
            height={20}
          />
        </button>
        <button type="button" onClick={goGithub}>
          <StaticImage
            placeholder="tracedSVG"
            alt="github"
            src="../../../images/github_icon.png"
            height={20}
          />
        </button> */}
        <ThemeToggle />
      </div>
    </header>
  );
};

export default MobileHeader;
