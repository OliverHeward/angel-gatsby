import React, { useRef } from "react"
import { useOnScreen } from "../../shared/hooks/useOnScreen"
import { ReactComponent as Zigzag } from "../../images/zigzag-blue.svg"
import { ReactComponent as Wotsit } from "../../images/wotsit.svg"
import { ReactComponent as Square } from "../../images/square.svg"

const List = ({ title, list, svg }) => {
  const ref = useRef()
  const onScreen = useOnScreen(ref, "0px", 0.1)
  let svgResult = null
  switch (svg) {
    case 0:
      svgResult = <Zigzag className="blue-zig" />
      break
    case 1:
      svgResult = <Wotsit className="wotsit-zig" />
      break
    case 2:
      svgResult = <Square className="square-zig" />

      break
    default:
      break
  }
  return (
    <div className={`method-container ${title}`}>
      {svgResult}
      <h2>{title}</h2>
      <ul ref={ref}>
        {list.map(item => (
          <li key={item.bold_word} className={onScreen ? "fade-in" : ""}>
            - {item.bold_word}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default List
