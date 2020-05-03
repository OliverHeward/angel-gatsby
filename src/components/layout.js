/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import "./sass/main.scss"

import ButtonMenu from "./ButtonMenu"
import Footer from "./Footer"
import Header from "./header"
import DarkMode from "./DarkMode"

const Layout = ({ children }) => {
  let header = <Header theme={"black"} />; 
  const changeImage = () => {
    if (document.body.classList.contains("light")) {
      return header = <Header theme={"black"} />
    } else {
      return header = <Header theme={"white"} />
    }
  }
  return (
    <div className="app-wrapper">
      <Header theme={"black"} />
      <div className="layout">{children}</div>
      <ButtonMenu />
      <DarkMode />
      <Footer />
    </div>
  )
}

export default Layout
