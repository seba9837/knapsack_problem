import React, { Component } from "react";
import Cont from "../../../hoc/Cont/Cont";
import Backdrop from "../Backdrop/Backdrop";

import "./modal.css";

class Modal extends Component {
  render() {
    return (
      <Cont>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className='Modal'
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0",
          }}
        >
          {this.props.children}
        </div>
      </Cont>
    );
  }
}
export default Modal;
