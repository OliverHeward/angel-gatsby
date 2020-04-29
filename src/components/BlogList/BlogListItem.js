import React from "react"
import useWordpressBlogList from "../../shared/hooks/get-blog-list"
import WithImage from "./ListComponents/WithImage"
import TextOnly from "./ListComponents/TextOnly"

const BlogListItem = () => {
  const { edges } = useWordpressBlogList()
  let result
  let blogArray = []
  edges.map(edge => {
    const type = edge.node.acf.insight_type
    switch (type) {
      case "PDF Post":
        edge.node.blog_title = "Read"
        result = <TextOnly {...edge} />
        break
      case "Blog Post":
        edge.node.blog_title = "Read"
        result = <TextOnly {...edge} />
        break
      case "Music":
        edge.node.blog_title = "Listen"
        result = <WithImage {...edge} />
        break
      case "Instagram":
        edge.node.blog_title = "For The Gram"
        result = <WithImage {...edge} />
        break
      default:
        result = <TextOnly {...edge} />
        break
    }
    blogArray.push(result)
  })
  return (
    <div>
      {blogArray}
    </div>
  )
}

export default BlogListItem
