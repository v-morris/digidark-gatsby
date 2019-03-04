import React from "react"
import { Link } from "gatsby"
import ImageAPI from "../components/imageAPI"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThirdPage = () => (
  <Layout>
    <SEO title="Photography" />
    <h3>Photography</h3>
    <p>Welcome to page 3</p>
    <ImageAPI/>
  </Layout>
)

export default ThirdPage
