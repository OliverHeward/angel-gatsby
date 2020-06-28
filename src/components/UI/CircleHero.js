import React from "react"

const CircleHero = image => (
  <div className="hero circle">
    <svg
      className="hero-circle"
      id="Layer_1"
      style={{ backgroundImage: `url(${image.source_url})` }}
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMinYMin meet"
    >
      <defs></defs>
      <title>Circle Hero SVG</title>
      <path
        class="cls-1"
        d="M1516.41,730.5c-276.14,0-500-223.86-500-500A497.83,497.83,0,0,1,1072.61,0H0V1080H1920V525.7C1829,649.87,1682.14,730.5,1516.41,730.5Z"
      />
    </svg>
  </div>
)

export default CircleHero
