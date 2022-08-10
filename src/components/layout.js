import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Global, css } from '@emotion/react'
import Nav from './nav'
import SocialBar from "./socialbar"
// import Footer from './footer'
import styled from '@emotion/styled';



const Layout = ({ title, children}) => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `)

//   const [cookies, setCookie] = useCookies(['name']);
  return (
    <>
      <div>
      <Helmet htmlAttributes={{lang: 'en'}}>
            <meta charSet="utf-8" lang="en"/>
            <meta name="description" content={data.site.siteMetadata.description}/>
            <title>{title}</title>
            <link rel="canonical" href={data.site.siteMetadata.siteUrl} />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@100&family=Open+Sans&display=swap" rel="stylesheet"/> 
      </Helmet>
      <Global
          styles={css`
            body {
              margin: 0;
              padding: 0;
              background: white;
              min-height: '100vh';
              max-width: '100vw';
              overflow-x: 'hidden';
              white-space: 'nowrap';
              font-family: "Open Sans", visby, sans-serif;
              h1, h2 {
                font-family: "Open Sans";
                color: #111111;
              }
              p {
                  font-family: "Open Sans";
                  color: #050505;
              }
            }
          `}
        />

        <Nav/>
        <SocialBar/>
        {/* <CookieTest>hello</CookieTest> */}
        <main>{children}</main>
        {/* <Footer hideFooter={hideFooter}/> */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
