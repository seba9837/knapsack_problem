import React from "react";

const aproximationSummary = (props) => {
  return (
    <div>
      <h3>Algorytm aproksymacyjny</h3>
      <p>Wprowadzone dane</p>
      <button
        type='button'
        class='btn btn-outline-danger'
        onClick={props.summaryCanceled}
      >
        Anuluj
      </button>
      <button
        type='button'
        class='btn btn-outline-success'
        onClick={props.summaryConfirmed}
      >
        Potwierdzam
      </button>
    </div>
  );
};

export default aproximationSummary;
