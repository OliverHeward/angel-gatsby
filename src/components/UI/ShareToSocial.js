import React from "react"
import {
  TwitterShareButton,
  LinkedinShareButton,
  FacebookShareButton,
} from "react-share"

const ShareToSocial = ({content}) => {
  return (
    <div className="share-container">
      <h1 className="share-title">Share?</h1>
      <FacebookShareButton quote={content}>Facebook.</FacebookShareButton>
      <LinkedinShareButton title={content}>LinkedIn.</LinkedinShareButton>
      <TwitterShareButton title={content}>Twitter.</TwitterShareButton>
    </div>
  )
}

export default ShareToSocial
