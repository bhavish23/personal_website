import React from 'react'

import Hero from '../components/hero'
import About from '../components/about'
import Experience from '../components/experience'
import Layout from '../components/layout'
import Work from '../components/Work'

const IndexPage = () => (
  <Layout>
  <Hero />
  <About />
  <Experience />
  <Work />
  </Layout>
)

export default IndexPage