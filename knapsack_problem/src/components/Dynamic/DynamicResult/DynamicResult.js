import React, {Component} from "react";
import axios from 'axios';

import Spinner from '../../UI/Spinner/Spinner';
import Cont from '../../../hoc/Cont/Cont';

class DynamicResult extends Component {

  state = {
    serverAnswer: null,
    loading: true
  };


  render() {
    
  let content = <Cont>
    <div>
        <h2>Wynik algorytmu:</h2>
        <button
          type='button'
          class='btn btn-outline-secondary'
          onClick={this.props.resultContinued}
        >
          Gotowe
        </button>
      </div>
  </Cont>
  if ( this.state.loading) {
    content = <Spinner/>
  }

    return (
      <Cont>
        {content}
      </Cont>
    );
  }
}
export default DynamicResult;
