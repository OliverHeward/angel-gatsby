import React, { useRef } from "react"
import { useOnScreen } from "../../shared/hooks/useOnScreen"
import {ReactComponent as Circle} from "../../images/circle.svg";
import {ReactComponent as Square} from "../../images/square.svg";
import {ReactComponent as Wotsit} from "../../images/wotsit.svg";
import {ReactComponent as Zigzag} from "../../images/zigzag-blue.svg";

const HeroPostSquare = image => {
  const ref = useRef()
  const onScreen = useOnScreen(ref, "0px", 0)
  return (
    <div className="hero-post-square">
      <svg
        ref={ref}
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        className={`svg-parrallax ${onScreen ? " " : "hide-banner"}`}
        x="0px"
        y="0px"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMinYMin meet"
        style={{ backgroundImage: `url(${image.source_url})` }}
      >
        <g>
          <polygon class="st0" points="1920,113.7 1920,0 1854.3,0"></polygon>
          <polygon
            class="st0"
            points="1449,777.7 1079,136.9 1316.2,0 0,0 0,1080 1920,1080 1920,505.8"
          ></polygon>
        </g>
      </svg>
      <Circle className="pink-circle" />
      <Square className="yellow-square" />
      <Wotsit className="pink-wotsit" />
      <Zigzag className="blue-zigzag" />
    </div>
  )
}

export default HeroPostSquare
