import React from "react"
import WithImage from "./ListComponents/WithImage"
import TextOnly from "./ListComponents/TextOnly"

const BlogListItem = insights => {
  let result
  let blogArray = []
  insights.insights.map(insight => {
    const type = insight.node.acf.insight_type
    switch (type) {
      case "PDF Post":
          insight.node.blog_title = "Read"
        result = <TextOnly {...insight} />
        break
      case "Blog Post":
          insight.node.blog_title = "Read"
        result = <TextOnly {...insight} />
        break
      case "Music":
          insight.node.blog_title = "Listen"
        result = <WithImage {...insight} />
        break
      case "Instagram":
          insight.node.blog_title = "For The Gram"
        result = <WithImage {...insight} />
        break
      default:
        result = <TextOnly {...insight} />
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
