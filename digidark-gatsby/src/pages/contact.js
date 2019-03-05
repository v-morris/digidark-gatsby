import React from "react"
import Contact from "../components/Contact"
import Layout from "../components/layout"
import SEO from "../components/seo"

const FourthPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h3>Contact</h3>
    <p>
        If you want to see what I've been up to, check out any of the links below
    </p>
    <Contact/>
  </Layout>
)

export default FourthPage
