import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import DynamicSolverBuilder from "./containers/DynamicSolverBulider/DynamicSolverBuilder";
import AproximationAlgorithmBulider from "./containers/ApproximationAlgorithmBuilder/ApproximationAlgorithmBulider";
import Theory from "./components/Theory/Theory";
import MainPage from "./components/MainPage/MainPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Layout />
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
    );
  }
}

export default App;
