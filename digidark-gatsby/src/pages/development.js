import React from "react"
import { Link } from "gatsby"
import GithubAPI from "../components/GithubAPI"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Development" />
    <h3>Development</h3>
    <p>Here are a few of my Github Repos! Several of these I've started to learn
      a specific technique, others I'm working and improving on over time.
    </p>
    <GithubAPI/>
  </Layout>
)

export default SecondPage
