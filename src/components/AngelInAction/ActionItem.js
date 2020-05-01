import React from "react"
import LinkButton from "../UI/LinkButton"

const ActionItem = ({ image, title, copy }) => {
  return (
    <div className="action-container">
      <img src={image} className="action-image" />
      <div className="text-container">
        <h3 className="action-title" dangerouslySetInnerHTML={{__html: title}}/>
        <p className="action-copy" dangerouslySetInnerHTML={{ __html: copy }} />
        <LinkButton>Read more</LinkButton>
      </div>
    </div>
  )
}

export default ActionItem
