import React, { Component } from "react";
import axios from 'axios';
import DynamicSheet from "../../components/Dynamic/DynamicSheet/DynamicSheet";
import Cont from "../../hoc/Cont/Cont";
import Modal from "../../components/UI/Modal/Modal";
import DynamicSummary from "../../components/Dynamic/DynamicSummary/DynamicSummary";
import DynamicResult from "../../components/Dynamic/DynamicResult/DynamicResult";
import { Spinner } from "reactstrap";

class DynamicSolverBuilder extends Component {
  state = {
    submiting: false,
    resultModal: false,
    loadingModal: false,
    weights: "",
    worth: "",
    stuffAmount: 0,
  };

  dataConfirmedHandler = () => {
    this.setState({ submiting: true });
  };

  summaryCloseHandler = () => {
    this.setState({ submiting: false });
  };

  sumaryConfirmedHandler = () => {
    this.setState({ loadingModal: true, submiting: false });

    axios.post('http://localhost:3001/dynamicSolver', 'cokolwik'
      )
      .then( res => {
        console.log(res);
        this.setState({resultModal:true, loadingModal: false});
        console.log("działa")
      })
      .catch( err => {
        console.log(err);
      })
  };

  resultCloseHandler = () => {
    this.setState({ resultModal: false });
  };

  updateWeightsOfElements = (event) => {
    this.setState({ weights: event.target.value });
    console.log(this.state.weights);
  };

  updateWorthOfElements = (event) => {
    this.setState({ worth: event.target.value });
    console.log(this.state.worth);
  };

  updateNumberOfElements = (event) => {
    this.setState({ stuffAmount: event.target.value });
    console.log(this.state.stuffAmount);
  };

  render() {
    return (
      <Cont>
        <Modal
          show={this.state.submiting}
          modalClosed={this.summaryCloseHandler}
        >
          <DynamicSummary
            summaryCanceled={this.summaryCloseHandler}
            summaryConfirmed={this.sumaryConfirmedHandler}
            weight={this.state.weights}
            worth={this.state.worth}
            number={this.state.stuffAmount}
          />
        </Modal>
        <Modal
          show={this.state.resultModal}
          modalClosed={this.resultCloseHandler}
        >
          <DynamicResult resultContinued={this.resultCloseHandler} />
        </Modal>
        <Modal show={this.state.loadingModal}
        modalClosed={this.resultCloseHandler}>
          <p>Ekran ładowania</p>
          <Spinner/>
        </Modal>
        <DynamicSheet
          value={this.state.stuffAmount}
          submitted={this.dataConfirmedHandler}
          weightChanged={(event) => this.updateWeightsOfElements(event)}
          worthChanged={(event) => this.updateWorthOfElements(event)}
          numberChanged={(event) => this.updateNumberOfElements(event)}
        />
      </Cont>
    );
  }
}

export default DynamicSolverBuilder;
