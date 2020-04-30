import React from "react"

const List = ({ title, list }) => {
  return (
    <div className={`method-container ${title}`}>
      <h2>{title}</h2>
      <ul>
        {list.map(item => (
          <li key={item.bold_word}>- {item.bold_word}</li>
        ))}
      </ul>
    </div>
  )
}

export default List
