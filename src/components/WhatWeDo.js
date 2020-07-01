import React from "react"
import useWordpressTestimonial from "../shared/hooks/get-testimonial"
import LinkButton from "./UI/LinkButton"

const WhatWeDo = () => {
  const { edges } = useWordpressTestimonial()

  // Take a random edge from the static query hook
  const randomReview = edges[Math.floor(Math.random() * edges.length)]

  // const result = edges.filter(edge => edge.node.title === "Ideas Testimonial")
  // const { acf } = result[0].node
  const { acf } = randomReview.node

  return (
    <div className="what-we-do-container content-width">
      <h1>What we do, for you.</h1>
      <p>
        From shorter tactical campaigns and activations to longer, strategic
        projects you get everything you need, in one happy place.
      </p>
      <div className="grey-container">
        <h3>{acf.testimonial}</h3>
      </div>
      <LinkButton>Read more</LinkButton>
    </div>
  )
}

export default WhatWeDo
