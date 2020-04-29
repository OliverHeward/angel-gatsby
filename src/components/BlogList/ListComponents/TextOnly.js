import React from "react"

const TextOnly = (edge) => {
  const { id, title, author, blog_title, date, link } = edge.node;
  return (
    <div>
      <div className="insight-wrapper blog-post" key={id}>
        <h3 className="insight-type">{blog_title}</h3>
        <div className="text-container">
          <h1 className="insight-title">{title}</h1>
          <span className="posted-on"></span>
          <span className="byline">By {author.name}</span>
        </div>
      </div>
    </div>
  )
}

export default TextOnly;