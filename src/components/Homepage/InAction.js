import React from "react"
import LinkButton from "../UI/LinkButton"
import useWordpressCaseStudy from "../../shared/hooks/get-case-studys"
import { Link } from "gatsby"

const InAction = (in_action) => {
    const {title, text} = in_action;
    const { edges } = useWordpressCaseStudy()

  return (
    <div className="angel-in-action">
      <div className="text-container">
        <h1>{title}</h1>
        <p>{text}</p>
        <LinkButton>See more</LinkButton>
      </div>
      <div className="showreel-container">
        {edges.map(post => (
          <Link to={post.node.path} key={post.node.id} className="showreel-link">
            <div
              className="showreel-wrapper"
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
