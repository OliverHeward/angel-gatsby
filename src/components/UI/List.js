import React, { useRef } from "react"
import { useOnScreen } from "../../shared/hooks/useOnScreen";

const List = ({ title, list }) => {
  const ref = useRef();
  const onScreen = useOnScreen(ref, '0px', 0.1);

  return (
    <div className={`method-container ${title}`}>
      <h2>{title}</h2>
      <ul ref={ref}>
        {list.map(item => (
          <li key={item.bold_word} className={onScreen ? 'fade-in' : ''}>- {item.bold_word}</li>
        ))}
      </ul>
    </div>
  )
}

export default List
