import React from "react"

const WorkSection = ({title, text, gif_image, mp4_file}) => {
  return (
    <div className="work-component content-width">
      <h1>{title}</h1>
      <p>{text}</p>
      <img src={mp4_file.source_url} alt="" />
    </div>
  )
}

export default WorkSection
