import React from "react"

const TeamItem = employee => {
  const {
    id,
    title,
    acf: { bio, image },
  } = employee
  return (
    <div className="team-wrapper">
      <img src={image.source_url} className="employee" alt={title} />
      <div className="text-container">
        <h2 className="team-title">{title}</h2>
        <p>{bio}</p>
      </div>
    </div>
  )
}

export default TeamItem
