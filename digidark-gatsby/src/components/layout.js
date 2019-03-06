/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"

const iconStyle = {
  padding:'10px',
  margin: '5px',
}

const Layout = ({ children }) => (

  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks{
              name
              link
            }
          }
        }
      }
    `}
    render={data => (

      <>

        <Header
          menuLinks={data.site.siteMetadata.menuLinks}
          siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 1000,
            padding: `0px 1rem 1.45rem`,
            paddingTop: 0
          }}
        >
          <main>
            {children}
          </main>

          <footer style={{ textAlign: `center` }}>
          <a href="https://github.com/v-morris" target="_blank"><i style={iconStyle} className="fab fa-github fa-lg"></i></a>
            <a href="https://twitter.com/digidarkdev" target="_blank"><i style={iconStyle} className="fab fa-twitter fa-lg"></i></a>
            <a href="https://www.linkedin.com/in/v-morris/" target="_blank"><i style={iconStyle} className="fab fa-linkedin-in fa-lg"></i></a>
            <p> © {new Date().getFullYear()},
            DigiDark Development and Design</p>
            
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
