import React, { useRef } from "react"
import { useOnScreen } from "../../../shared/hooks/useOnScreen";

const TeamItem = employee => {
  const ref = useRef();
  const onScreen = useOnScreen(ref, '0px', 0);
  const {
    id,
    title,
    acf: { bio, image },
  } = employee
  return (
    <div className="team-wrapper">
      <img src={image.source_url} className="employee" alt={title} />
      <div className={`text-container ${onScreen ? "fade-down" : ""}`} ref={ref} key={id}>
        <h2 className="team-title">{title}</h2>
        <p>{bio}</p>
      </div>
    </div>
  )
}

export default TeamItem
