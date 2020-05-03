import React from "react"

const BlogContent = content => (
  <div
    className="blog-content-wrapper"
    dangerouslySetInnerHTML={{ __html: content.content }}
  />
)

export default BlogContent
