import React, { useState } from "react"
import Input from "./Input"

import { updateObject, checkValidity } from "../../shared/utility"

const Form = props => {
  const [form, setForm] = useState({
    name: {
      elementType: "input",
      elementConfig: {
        type: "text",
        label: "Name",
        name: "name",
      },
      value: "",
      validation: {
        required: true,
        isEmail: false,
      },
      valid: false,
      touched: false,
    },
    email: {
      elementType: "input",
      elementConfig: {
        type: "text",
        label: "Company",
        name: "company",
      },
      value: "",
      validation: {
        required: true,
        isEmail: false,
      },
      valid: false,
      touched: false,
    },
    subject: {
      elementType: "input",
      elementConfig: {
        type: "email",
        label: "Email",
        name: "subject",
      },
      value: "",
      validation: {
        required: true,
        isEmail: true,
      },
      valid: false,
      touched: false,
    },
    message: {
      elementType: "input",
      elementConfig: {
        type: "phone",
        label: "Number",
        name: "number",
      },
      value: "",
      validation: {
        required: true,
        isEmail: false,
      },
      valid: false,
      touched: false,
    },
    newsletter: {
      elementType: "checkbox",
      elementConfig: {
        type: "checkbox",
        label: "Please keep me informed about related content in the future",
        name: "newsletter",
      },
      value: "",
      validation: {
        required: false,
        isEmail: false,
      },
      valid: false,
      touched: true
    },
  })
  const [formIsValid, setFormIsValid] = useState(false)

  const inputChangedHandler = (event, inputIdentifier) => {
    const updatedFormElement = updateObject(form[inputIdentifier], {
      value: event.target.value,
      valid: checkValidity(
        event.target.value,
        form[inputIdentifier].validation
      ),
      touched: true,
    })

    const updatedForm = updateObject(form, {
      [inputIdentifier]: updatedFormElement,
    })

    let formIsValid = true
    for (let inputIdentifier in updatedForm) {
      formIsValid = updatedForm[inputIdentifier].valid && formIsValid
    }
    setForm(updatedForm)
    setFormIsValid(formIsValid)
  }

  const formElementsArray = []
  for (let key in form) {
    formElementsArray.push({
      id: key,
      config: form[key],
    })
  }

  // Map through elements and create Inputs from state
  let contactForm = formElementsArray.map(formElement => (
    <Input
      key={formElement.id}
      elementType={formElement.config.elementType}
      name={formElement.config.name}
      elementConfig={formElement.config.elementConfig}
      value={formElement.config.value}
      invalid={!formElement.config.valid}
      sholdValidate={formElement.config.validation}
      touched={formElement.config.touched}
      changed={event => inputChangedHandler(event, formElement.id)}
    />
  ))
  return (
    <form className="pdf-form" action="">
      <img
        src="https://www.angellondon.co.uk/wp-content/themes/angel-starter-master/assets/svgs/angel-circle-black.svg"
        alt="Angel London"
        className="form-logo"
      />
      <p className="form-copy">
        Please fill out your details to download the report
      </p>
      {contactForm}
      <p className="small-copy">
        By clicking submit, you agree to our Privacy Policy that outlines how we
        use your personal information.
      </p>
      <div className="link-button blue">
        <button type="submit" className="link">Get the free report</button>
      </div>
    </form>
  )
}

export default Form
