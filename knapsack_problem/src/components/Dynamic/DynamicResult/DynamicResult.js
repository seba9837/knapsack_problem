import React, {Component} from "react";

import Spinner from '../../UI/Spinner/Spinner';
import Cont from '../../../hoc/Cont/Cont';

class DynamicResult extends Component {
  
 
//shouldComponentUpdate(nextProps){
//  return this.props !== nextProps;
//}

componentDidUpdate(){
  console.log(this.props.data.response);
}
  render() {
    

    return (
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
    );
  }
}
export default DynamicResult;
