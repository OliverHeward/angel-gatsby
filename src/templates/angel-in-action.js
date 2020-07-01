import React from "react"
import Layout from "../components/layout"
import ActionItem from "../components/AngelInAction/ActionItem"
import { StaticQuery, graphql } from "gatsby"
import WhatWeDo from "../components/WhatWeDo"
import LetsTalk from "../components/UI/LetsTalk"
/* eslint-disable no-unused-expressions */
export default ({ pageContext }) => {
  const { title, acf } = pageContext;
  // Reference for the element that we want to detect is on screen

  // Call the useOnScreen hook
  // pass ref & root marigin 
  

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
            {props.allWordpressWpAngelInAction.edges.map(item => {
              console.log(item.node);
              console.log(item.node.slug);
              <ActionItem
                image={item.node.acf.hero.hero_image.source_url}
                title={item.node.title}
                copy={item.node.excerpt}
                link={`angel-in-action/${item.node.slug}`}
              />
            })}
          </div>
        )}
      />
      <WhatWeDo />
      <LetsTalk />
    </Layout>
  )
}
