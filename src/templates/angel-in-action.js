import React, { useEffect } from "react"
import Layout from "../components/layout"
import ActionItem from "../components/AngelInAction/ActionItem"
import { StaticQuery, graphql } from "gatsby"
import WhatWeDo from "../components/WhatWeDo";
import LetsTalk from "../components/UI/LetsTalk";

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
                  excerpt
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
        render={props => (
          <div className="action-wrapper">
            {props.allWordpressWpAngelInAction.edges.map(item => (
            <ActionItem
              image={item.node.acf.hero.hero_image.source_url}
              title={item.node.title}
              copy={item.node.excerpt}
            />
            ))}
          </div>
        )}
      />
      <WhatWeDo />
      <LetsTalk />
    </Layout>
  )
}
