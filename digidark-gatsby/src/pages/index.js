import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

//5F4B8B ultraviolet

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

      <div style={{ align: `right` }}>

        <h1 style={{ color: `#384883`, fontSize: `3.6rem`, textAlign: `right`, /*border: `3px solid orange` */ }}>Hi, I'm V</h1>

        <p style={{ color: `#5F4B8B`, fontSize: `0.9rem`, textAlign: `right`, maxWidth: `500px`, /*border: `3px solid yellow`*/ }}>
          I'm a full stack developer and photographer located in the Pittsburgh area. I'm a recent coding bootcamp
          graduate who spends practically all day, every day, coding. I thrive when I am being challenged and
          have an entrepreneurial spirit. My goal is to combine my creative skills from art school into
          the software development world to create functionally beautiful programs. As I develop new skills, I will
          continue to add new features here and expand on the user experience.
          </p>

      </div>

    </div>

  </Layout>

)

export default IndexPage
