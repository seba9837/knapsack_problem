import React, { Component } from "react";
import AproximationSheet from "../../components/Approximation/AproximationSheet/AproximationSheet";
import Cont from "../../hoc/Cont/Cont";
import Modal from "../../components/UI/Modal/Modal";
import AproximationSummary from "../../components/Approximation/AproximationSummary/AproximationSummary";
import AproximationResult from "../../components/Approximation/AproximationResult/AproximationResult";

class AproxiamtionAlgorithmBuilder extends Component {
  state = {
    submiting: false,
    resultModal: false,
  };

  dataConfirmedHandler = () => {
    this.setState({ submiting: true });
  };

  summaryCloseHandler = () => {
    this.setState({ submiting: false });
  };

  sumaryConfirmedHandler = () => {
    this.setState({ resultModal: true, submiting: false });
  };

  resultCloseHandler = () => {
    this.setState({ resultModal: false });
  };

  render() {
    return (
      <Cont>
        <Modal
          show={this.state.submiting}
          modalClosed={this.summaryCloseHandler}
        >
          <AproximationSummary
            summaryCanceled={this.summaryCloseHandler}
            summaryConfirmed={this.sumaryConfirmedHandler}
          />
        </Modal>
        <Modal
          show={this.state.resultModal}
          modalClosed={this.resultCloseHandler}
        >
          <AproximationResult resultContinued={this.resultCloseHandler} />
        </Modal>
        <AproximationSheet submitted={this.dataConfirmedHandler} />
      </Cont>
    );
  }
}

export default AproxiamtionAlgorithmBuilder;
