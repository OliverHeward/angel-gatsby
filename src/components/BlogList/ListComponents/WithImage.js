import React, { useRef } from "react"
import { useOnScreen } from "../../../shared/hooks/useOnScreen"

const WithImage = edge => {
  const ref = useRef()
  const onScreen = useOnScreen(ref, "0px", 0)
  const edgeType = edge.node.acf.insight_type
  const { id, author, link, acf, blog_title } = edge.node

  let imgSrc =
    edgeType === "Instagram"
      ? acf.instagram.photo_cover.source_url
      : acf.music.cover_photo.source_url
  let blogContent =
    edgeType === "Instagram" ? acf.instagram.title : acf.music.song

  return (
    <a href={link} className={onScreen ? "fade-up" : ""} ref={ref}>
      <div className="insight-wrapper instagram" key={id}>
        <h3 className="insight-type">{blog_title}</h3>
        <img src={imgSrc} alt="" />
        <div className="text-container">
          <p
            className="blog-content"
            dangerouslySetInnerHTML={{
              __html: blogContent,
            }}
          />
          <span className="posted-on"></span>
          <span className="byline">By {author.name}</span>
        </div>
      </div>
    </a>
  )
}

export default WithImage
