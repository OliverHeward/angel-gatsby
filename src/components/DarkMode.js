import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

import { FaSun, FaMoon } from "react-icons/fa"

const DarkMode = (props) => {
  return (
    <div onClick={props.clicked} className="dark-holder">
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <div
            className="light-dark-btn"
            onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <FaSun fill="white" /> : <FaMoon fill="black" />}
          </div>
        )}
      </ThemeToggler>
    </div>
  )
}

export default DarkMode
