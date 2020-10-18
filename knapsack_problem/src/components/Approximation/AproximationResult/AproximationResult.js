import React from "react";

const aproximationResult = (props) => {
  return (
    <div>
      <h2>Wynik algorytmu:</h2>
      <button
        type='button'
        class='btn btn-outline-secondary'
        onClick={props.resultContinued}
      >
        Gotowe
      </button>
    </div>
  );
};

export default aproximationResult;
