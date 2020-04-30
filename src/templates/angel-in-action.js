import React, { useEffect } from "react"
import Layout from "../components/layout"
import ActionItem from "../components/AngelInAction/ActionItem"
import { StaticQuery, graphql } from "gatsby"

export default ({ pageContext }) => {
  useEffect(() => {
    console.log(pageContext)
  })
  const { title, acf } = pageContext
  return (
    <Layout>
      <div className="text-container">
        <h1>{title}</h1>
        <p className="copy">{acf.subtitle}</p>
      </div>
      <StaticQuery
        query={graphql`
          {
            allWordpressWpAngelInAction {
              edges {
                node {
                  title
                  slug
                  acf {
                    subtitle
                    hero {
                      hero_image {
                        title
                        source_url
                      }
                    }
                  }
                }
              }
            }
          }
        `}
        render={props =>
          props.allWordpressWpAngelInAction.edges.map(item => (
            <ActionItem
              image={item.node.acf.hero.hero_image.source_url}
              title={item.node.title}
              copy={item.node.acf.subtitle}
            />
          ))
        }
      />
    </Layout>
  )
}
