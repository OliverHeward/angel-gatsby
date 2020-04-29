/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import "./sass/main.scss";

import ButtonMenu from './ButtonMenu';

const Layout = ({ children }) => (
  <div className="app-wrapper">
    <div className="layout">
      {children}
    </div>
    <ButtonMenu />
  </div>
)

export default Layout
