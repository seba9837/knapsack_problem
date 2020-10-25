import React from "react";
import { Table } from 'reactstrap';

const aproximationResult = (props) => {
  return (
    <div>
      <h2>Wynik algorytmu:</h2>
      <Table>
        <thead>
          <tr>
            <th>L.p</th>
            <th>hj</th>
            <th>Wartość</th>
            <th>Cena</th>
          </tr>
        </thead>
          
        
        <tbody>
          {
            props.answerFromServer.map((el) =>{
              return(
                <tr>
                  <th scope="row">{el.id}</th>
                  <td>{el.ratio.toFixed(2)} $/kg</td>
                  <td>{el.worth} $</td>
                  <td>{el.weight} kg</td>
                </tr>
              );
            })
          }
        </tbody>
      </Table>
      <p>Wartość plecaka: {props.totalWorth} $</p>
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
