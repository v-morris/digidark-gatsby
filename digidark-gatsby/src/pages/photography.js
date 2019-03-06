import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"


import Layout from "../components/layout"
import SEO from "../components/seo"

const ThirdPage = () => (
  <Layout>
    <SEO title="Photography" />
    <h3>Photography</h3>
    <p>
      A small sample of life through my eyes. More to come as I add albums.
    </p>
    <div >
      <Image />
    </div>
  </Layout>
)

export default ThirdPage
