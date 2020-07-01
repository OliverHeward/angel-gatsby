import React, { useRef } from "react"
import LinkButton from "../UI/LinkButton"
import useWordpressCaseStudy from "../../shared/hooks/get-case-studys"
import { Link } from "gatsby"
import useWordpressInAction from "../../shared/hooks/get-in-action"
import { useOnScreen } from "../../shared/hooks/useOnScreen"
/* eslint-disable no-unused-expressions */
const InAction = () => {  
  // Create reference to object
  const ref = useRef()
  const onScreen = useOnScreen(ref, "0px", 0)

  const {
    edges: {
      [0]: {
        node: {
          acf: {
            page_content: {
              in_action: { title, text },
            },
          },
        },
      },
    },
  } = useWordpressInAction();
  const { edges } = useWordpressCaseStudy();
  console.log(edges);
  return (
    <div className="angel-in-action">
      <div className="text-container">
        <h1>{title}</h1>
        <p>{text}</p>
        <LinkButton>See more</LinkButton>
      </div>
      <div className="showreel-container" ref={ref}>
        {edges.map(post => (
          <Link
            to={`angel-in-action/${post.node.slug}`}
            key={post.node.id}
            className={`showreel-link ${onScreen ? "fade-in-mobile" : ""}`}
          >
            <div
              className={`showreel-wrapper ${onScreen ? "fade-in-mobile" : ""}`}
              style={{
                backgroundImage: `url(${post.node.acf.hero.hero_image.source_url})`,
              }}
            >
              <div className="overlay">
                <h2 className="showreel-title">{post.node.title}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default InAction
