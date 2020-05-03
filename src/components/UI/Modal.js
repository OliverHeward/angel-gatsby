import React from "react"
import Aux from "../../shared/HOC/Aux"
import Backdrop from "./Backdrop"

const Modal = props => {
  return (
    <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <div className="modal" id="modal" style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'
        }}>
        {props.children}
      </div>
    </Aux>
  )
}

export default Modal
