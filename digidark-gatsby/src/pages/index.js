import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

//5F4B8B ultraviolet
const style = {

}
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{
      display: `flex`,
      justifyContent: `flex-end`,
      border: `10px solid transparent`,
      padding: `10px`,
      borderImage: `linear-gradient(30deg, #3686A0 40%, transparent 53%)`,
      borderImageSlice: `1`,
      
    }}>



      <div style={{ align: `right`}}>

        <h1 style={{color:`#384883`, fontSize: `3.6rem`, textAlign: `right`, /*border: `3px solid orange` */}}>Hi, I'm V</h1>

        <p style={{ color:`#5F4B8B`,fontSize: `0.9rem`, textAlign: `right`, maxWidth: `500px`, /*border: `3px solid yellow`*/ }}>Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Proin eget turpis in risus tincidunt gravida non ac dui. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Vivamus sodales pretium tellus,
      eget semper nisl porttitor eget. Vestibulum consectetur pharetra ornare.</p>
      
      </div>

    </div>

  </Layout>

)

export default IndexPage
