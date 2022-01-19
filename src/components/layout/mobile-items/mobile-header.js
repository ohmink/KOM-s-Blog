import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const MobileHeader = () => {
  return (
    <header>
      <a href={process.env.SITE_URL} rel="noreferrer">
        KOM's Blog
      </a>
      <div>
        <button type="button">
          <StaticImage
            placeholder="tracedSVG"
            alt="Search"
            src="../images/search_icon.png"
            height={20}
          />
        </button>
      </div>
    </header>
  );
};

export default MobileHeader;
