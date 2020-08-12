import React from "react"

const Input = props => {

  let inputElement = null

  // Dynamic Switch Statemetic to render Input components handled by state on Form.js
  let shrink = props.value.length ? "shrink" : ""
  switch (props.elementType) {
    case "input":
      inputElement = (
        <div className="input-group">
          <input
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}
          />
          <label className={`${shrink} form-input-label`}>
            {props.elementConfig.label}
          </label>
        </div>
      )
      break
    case "textarea":
      inputElement = (
        <div className="input-group">
          <textarea
            // className={inputClasses.join(' ')}
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}
          />
          <label className={`${shrink} form-input-label`}>
            {props.elementConfig.label}
          </label>
        </div>
      )
      break
    case "checkbox":
      inputElement = (
        <label className="cb-container">
          <input
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}
          />
          <span className="checkmark"></span>
          {props.elementConfig.label}
        </label>
      )
      break
    default:
      inputElement = (
        <input
          // className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      )
  }
  // // hacky way to create inline custom checkbox within the input loop
  // // let cb = inputElement.props.firstChild.props.type === "checkbox" ? "cb-container" : ""
  // let checkmark,
  //   cb = null
  // if (inputElement.props.type === "checkbox") {
  //   cb = true
  //   checkmark = <span className="checkmark"></span>
  // }
  return inputElement
}

export default Input
