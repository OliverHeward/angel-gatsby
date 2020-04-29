import React from "react"

import { graphql, StaticQuery, Link } from "gatsby"

const NavMenu = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressWpApiMenusMenusItems(filter: { name: { eq: "Menu 1" } }) {
          edges {
            node {
              name
              items {
                title
                object_slug
                wordpress_id
              }
            }
          }
        }
      }
    `}
    render={props => (
      <nav className="nav-menu">
        <ul className="nav-list">
          {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
            item => (
              <li>
                <Link
                  className="nav-menu-item"
                  to={item.object_slug}
                  key={item.wordpress_id}
                >
                  {item.title}
                </Link>
              </li>
            )
          )}
        </ul>
      </nav>
    )}
  />
)

export default NavMenu
