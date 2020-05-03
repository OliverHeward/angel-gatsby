import React from "react"
import { Link } from "gatsby";

const TextOnly = (edge) => {
  const { id, title, author, blog_title, date, slug } = edge.node;
  return (
    <Link to={`/insight/${slug}`}>
      <div className="insight-wrapper blog-post" key={id}>
        <h3 className="insight-type">{blog_title}</h3>
        <div className="text-container">
          <h1 className="insight-title">{title}</h1>
          <span className="posted-on"></span>
          <span className="byline">By {author.name}</span>
        </div>
      </div>
    </Link>
  )
}

export default TextOnly;