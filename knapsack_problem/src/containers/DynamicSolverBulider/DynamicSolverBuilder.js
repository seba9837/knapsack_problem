import React, { Component } from "react";
import axios from 'axios';
import DynamicSheet from "../../components/Dynamic/DynamicSheet/DynamicSheet";
import Cont from "../../hoc/Cont/Cont";
import Modal from "../../components/UI/Modal/Modal";
import DynamicSummary from "../../components/Dynamic/DynamicSummary/DynamicSummary";
import DynamicResult from "../../components/Dynamic/DynamicResult/DynamicResult";
import Spinner from "../../components/UI/Spinner/Spinner";

class DynamicSolverBuilder extends Component {
  state = {
    submiting: false,
    resultModal: false,
    loadingModal: false,
    weights: "",
    worth: "",
    stuffAmount: 0,
    maxWeight: 0,
    answer: {
      maxWorth: "Brak danych"
    }
  };

  dataConfirmedHandler = () => {
    this.setState({ submiting: true });
  };

  summaryCloseHandler = () => {
    this.setState({ submiting: false });
  };

  sumaryConfirmedHandler = () => {
    this.setState({ loadingModal: true, submiting: false });

    axios.post('/dynamicSolver', {
      weight: this.state.weights,
      worth: this.state.worth,
      amount: this.state.stuffAmount,
      max: this.state.maxWeight
    }
      )
      .then( res => {
        console.log("Dane wysłane");
        this.setState({resultModal:true, loadingModal: false, answer: res.data});
        console.log(this.state.answer);
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
  updateMaxWeight = (event) => {
    this.setState({ maxWeight: event.target.value });
    console.log(this.state.maxWeight);
  }
  render() {
    return (
      <div style={{backgroundColor: '#F4F4F4',height: "100%", width:"80%", marginLeft:"auto", marginRight:"auto", padding: "8px"}}>
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
          <DynamicResult 
            resultContinued={this.resultCloseHandler} 
            answerFromServer={this.state.answer.maxWorth}/>
        </Modal>
        
        <DynamicSheet
          value={this.state.stuffAmount}
          submitted={this.dataConfirmedHandler}
          weightChanged={(event) => this.updateWeightsOfElements(event)}
          worthChanged={(event) => this.updateWorthOfElements(event)}
          numberChanged={(event) => this.updateNumberOfElements(event)}
          maxWeightChanged={(event) => this.updateMaxWeight(event)}
        />
      </div>
    );
  }
}

export default DynamicSolverBuilder;
