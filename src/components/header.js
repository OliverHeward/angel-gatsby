import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle, theme }) => {
  return (
    <header>
      <Link to="/home">
        <img
          src={`https://angellondon.co.uk/wp-content/themes/angel-starter-master/assets/svgs/angel-circle-${theme}.svg`}
          className="angel-logo"
          alt="Angel Logo"
        />
      </Link>
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
