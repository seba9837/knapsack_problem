import React from "react";
//import { Table } from 'reactstrap';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const aproximationResult = (props) => {
  return (
    <div>
      <h2>Wynik algorytmu:</h2>

      

      <TableContainer component={Paper}>
      <Table  aria-label="caption table">
        <caption>Wartość plecaka: {props.totalWorth} $</caption>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="left">Hj</TableCell>
            <TableCell align="left">Wartość</TableCell>
            <TableCell align="left">Waga</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            props.answerFromServer.map((el) =>{
              return(
                <TableRow key={el.ide}>
                  <TableCell component="th" scope="row">{el.id}</TableCell>
                  <TableCell>{el.ratio.toFixed(2)} $/kg</TableCell>
                  <TableCell>{el.worth} $</TableCell>
                  <TableCell>{el.weight} kg</TableCell>
                </TableRow>
              );
            })
          }
        </TableBody>
      </Table>
    </TableContainer>
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
