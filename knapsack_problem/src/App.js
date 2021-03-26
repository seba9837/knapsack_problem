import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import DynamicSolverBuilder from "./containers/DynamicSolverBulider/DynamicSolverBuilder";
import AproximationAlgorithmBulider from "./containers/ApproximationAlgorithmBuilder/ApproximationAlgorithmBulider";
import Theory from "./components/Theory/Theory";
import MainPage from "./components/MainPage/MainPage";
import Background from "./assets/images/escheresque_@2X.png"


class App extends Component {
  render() {
    return (
      <div style={{ height: '100%', position: 'absolute', left: '0px', width: '100%', overflow: 'hidden'}}>
        <BrowserRouter>
        
        <Layout />
        <div style={{backgroundImage: `url(${Background})`, height: "100%"}}>
        <Switch>
          <Route
            path='/Aproximation'
            component={AproximationAlgorithmBulider}
          />
          <Route path='/Dynamic' component={DynamicSolverBuilder} />
          <Route path='/Theory' component={Theory} />
          <Route path='/' exact component={MainPage} />
        </Switch>
        </div>
        
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
