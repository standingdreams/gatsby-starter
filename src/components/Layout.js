import React from "react"
import { PropTypes } from "prop-types"
import "normalize.css"
import GlobalStyles from "../styles/GlobalStyles"

const Layout = props => {
  const { children } = props
  return (
    <>
      <GlobalStyles />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
