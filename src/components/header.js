
import PropTypes from "prop-types"
import React, { useEffect } from "react"

const Header = ({ siteTitle, theme }) => {
  console.log(theme);
  return (
  <header>
    <img src={`https://angellondon.co.uk/wp-content/themes/angel-starter-master/assets/svgs/angel-circle-${theme}.svg`} className="angel-logo" alt="Angel Logo" />
  </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
