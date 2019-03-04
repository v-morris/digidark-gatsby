import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import MenuContainer from "../components/MenuContainer"
import Image from "../components/image"
import digilogo from '../images/digi-logo.png'; // Tell Webpack this JS file uses this image

const Header = ({ siteTitle, menuLinks }) => (
  <header
    style={{
      background: `#384883`,
      marginBottom: `1rem`,
    }}
  >
  
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1rem 1.45rem`,
        display:`flex`,
        justifyContent:`space-between`
        
      }}
    >
    <MenuContainer/>
    
      <h4 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {/* {siteTitle} */}
          <img src = {digilogo} width="200px"/>
        </Link>
      </h4>
     
    </div>
    
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
