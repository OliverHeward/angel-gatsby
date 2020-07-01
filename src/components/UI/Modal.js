import React from "react"
import Aux from "../../shared/HOC/Aux"
// import Backdrop from "./Backdrop"

const Modal = props => {
  return (
    <Aux>
        <div className="modal" id="modal" style={{
            display: props.show ? 'block' : 'none'
        }} onClick={props.modalClosed}>

          {/* animate form to come down with a keyframe */}
          <div className={`modal-content ${props.show ? 'slide-down' : ''}`}>
            <span className="close" id="closeForm" onClick={props.modalClosed}>×</span>
            {props.children}
          </div>
      </div>
    </Aux>
  )
}

export default Modal
