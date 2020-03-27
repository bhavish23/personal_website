import React from "react"
import Helmet from "react-helmet"
import { render } from "react-dom"

const Head = ({ metaData }) => {
  return (
    <Helmet>
      <html lang="en" prefix="og: http://ogp.me/ns#" />
      <title itemProp="name" lang="en">
        {metaData.title}
      </title>
    </Helmet>
  )
}

export default Head
