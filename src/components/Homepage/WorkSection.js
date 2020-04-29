import React, { useEffect } from "react"

const WorkSection = ({title, text, gif_image, mp4_file}) => {
  return (
    <div className="work-component">
      <h1>{title}</h1>
      <p>{text}</p>
      <img src={mp4_file.source_url} />
    </div>
  )
}

export default WorkSection
