import React, { useRef } from "react"
import { useOnScreen } from "../../shared/hooks/useOnScreen";
import {ReactComponent as HollowSquare} from "../../images/square-hollow-yellow.svg";
import {ReactComponent as Wotsit} from "../../images/wotsit.svg";
import {ReactComponent as Square} from "../../images/square.svg";
import {ReactComponent as Circle} from "../../images/circle.svg";

const Hero = image => {
  const ref = useRef();
  const onScreen = useOnScreen(ref, '0px', 0);

  return (
    <div className="hero about-page" ref={ref}>
      <svg
        id="zigzag-hero"
        data-name="Hero"
        xmlns="http://www.w3.org/2000/svg"
        style={{ backgroundImage: `url(${image.source_url})` }}
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMinYMin meet"
        className={`${onScreen ? " " : "hide-banner"}`}
      >
        <defs></defs>
        <title>Zigzag Hero SVG</title>
        <path
          className="hero-zigzag"
          d="M1796.32,471.29l-225.9,117.43a114.29,114.29,0,0,1-75.26,11.07c-35.14-6.93-66.66-30.48-83.27-66.81L1304.35,298.34,1078.46,415.78a114.44,114.44,0,0,1-75.27,11.07c-35.14-6.94-66.65-30.48-83.27-66.82L761.26,13.79A129.15,129.15,0,0,1,755.9,0H0V1080H1920V732a122.43,122.43,0,0,1-16.15-26.12Z"
        />
        <path
          className="hero-zigzag"
          d="M1309.49,19.34c29.6-15.42,62.12-16.94,90.82-6.83s53.56,31.68,67.71,62.58l107.54,234.66,225.9-117.47A114,114,0,0,1,1920,199.69V0H1020.9l62.69,136.81Z"
        />
      </svg>
      <HollowSquare className="pink-square" />
      <Square className="square" />
      <Circle className="yellow-circle" />
      <Wotsit className="blue-wotsit" />

    </div>
  )
}

export default Hero
