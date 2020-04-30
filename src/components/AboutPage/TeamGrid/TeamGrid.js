import React from "react"
import TeamItem from "./TeamItem"
import { StaticQuery, graphql } from "gatsby"

const TeamGrid = () => (
  <div className="team-grid">
    <StaticQuery
      query={graphql`
        {
          allWordpressWpEmployees {
            edges {
              node {
                id
                title
                acf {
                  bio
                  image {
                    source_url
                  }
                }
              }
            }
          }
        }
      `}
      render={props =>
        props.allWordpressWpEmployees.edges.reverse().map(employee => (
            <TeamItem {...employee.node} />
        ))}
    />
  </div>
)

export default TeamGrid
