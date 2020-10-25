import React, { Component } from "react";
import axios from 'axios';

import AproximationSheet from "../../components/Approximation/AproximationSheet/AproximationSheet";
import Cont from "../../hoc/Cont/Cont";
import Modal from "../../components/UI/Modal/Modal";
import AproximationSummary from "../../components/Approximation/AproximationSummary/AproximationSummary";
import AproximationResult from "../../components/Approximation/AproximationResult/AproximationResult";
import Spinner from "../../components/UI/Spinner/Spinner"

class AproxiamtionAlgorithmBuilder extends Component {
  state = {
    submiting: false,
    resultModal: false,
    loadingModal: false,
    weights: "",
    worth: "",
    stuffAmount: 0,
    maxWeight: 0,
    answer: [],
    totalWorth: 0
  };

  dataConfirmedHandler = () => {
    this.setState({ submiting: true });
  };

  summaryCloseHandler = () => {
    this.setState({ submiting: false });
  };

  sumaryConfirmedHandler = () => {
    this.setState({ loadingModal: true, submiting: false });

    axios.post('/approximationSolver', {
      weight: this.state.weights,
      worth: this.state.worth,
      amount: this.state.stuffAmount,
      max: this.state.maxWeight
    }
    ).then( res => {
      console.log("Dane wysłane");
      this.setState({resultModal:true, loadingModal: false, answer: res.data.knapsack, totalWorth: res.data.totalWorth});
      console.log(this.state.answer);
    }).catch( err => {
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
  updateMaxWeight = (event) => {
    this.setState({ maxWeight: event.target.value });
    console.log(this.state.maxWeight);
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
            weight={this.state.weights}
            worth={this.state.worth}
            number={this.state.stuffAmount}
            max={this.state.maxWeight}
          />
        </Modal>
        <Modal 
          show={this.state.loadingModal}
          modalClosed={this.resultCloseHandler}>
        <Spinner/>
        </Modal>
        <Modal
          show={this.state.resultModal}
          modalClosed={this.resultCloseHandler}
        >
          <AproximationResult 
            resultContinued={this.resultCloseHandler} 
            answerFromServer={this.state.answer}
            totalWorth={this.state.totalWorth} />
        </Modal>
        <AproximationSheet 
          submitted={this.dataConfirmedHandler}
          weightChanged={(event) => this.updateWeightsOfElements(event)}
          worthChanged={(event) => this.updateWorthOfElements(event)}
          numberChanged={(event) => this.updateNumberOfElements(event)}
          maxWeightChanged={(event) => this.updateMaxWeight(event)} />
      </Cont>
    );
  }
}

export default AproxiamtionAlgorithmBuilder;
