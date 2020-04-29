import React from "react"

const WithImage = edge => {
  const edgeType = edge.node.acf.insight_type;

  const { id, title, author, date, link, acf, blog_title } = edge.node

  let imgSrc = (edgeType === "Instagram" ? acf.instagram.photo_cover.source_url : acf.music.cover_photo.source_url);
  let blogContent = (edgeType === "Instagram" ? acf.instagram.title : acf.music.song);

  return (
    <div className="insight-wrapper instagram" key={id}>
      <h3 className="insight-type">{blog_title}</h3>
      <img src={imgSrc} />
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
  )
}

export default WithImage
