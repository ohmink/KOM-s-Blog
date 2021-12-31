import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ title, description }) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(seoQuery);

  const { defaultTitle, defaultDescription, siteUrl } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet title={seo.title}>
      <meta
        name="google-site-verification"
        content="tQIydBOpCDIxmpP3kRsRsK50hOTgkJV-xwkz3ouSesI"
      />
      <meta name="description" content={seo.description} />

      {seo.url && <meta property="og:url" content={seo.url} />}

      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
    </Helmet>
  );
};

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

SEO.defaultProps = {
  title: "KOM's Blog",
  description:
    "웹 개발 지식을 정리하는 소박한 공간, 권오민 블로그, 프론트엔드 개발",
};

const seoQuery = graphql`
  query seoQuery {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl
        author
      }
    }
  }
`;
