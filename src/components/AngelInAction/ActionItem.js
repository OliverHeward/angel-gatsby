import React from "react"
import LinkButton from "../UI/LinkButton"
import { Link } from "gatsby";


const ActionItem = ({ image, title, copy, link }) => {
  return (
    <div className="action-container">
      <Link to={link} className="action-link-wrap">
        <img src={image} className="action-image" alt="" />
      </Link>
      <div className="text-container">
        <h3
          className="action-title"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p className="action-copy" dangerouslySetInnerHTML={{ __html: copy }} />
        <LinkButton url={link}>Read more</LinkButton>
      </div>
    </div>
  )
}

export default ActionItem
