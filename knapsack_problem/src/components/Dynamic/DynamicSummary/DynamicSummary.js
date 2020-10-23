import React from "react";
import { Container, Row, Col } from "reactstrap";

const dynamicSummary = (props) => {
  return (
    <div>
      <h2>Algorytm dynamiczny</h2>
      <h3>Wprowadzone dane:</h3>
      <Container>
        <Row>
          <Col xs='6'>
            <p>Wagi przedmiotów:</p>
            {props.weight.split(",", props.number).map((number) => {
              return <li>{number}</li>;
            })}
          </Col>
          <Col xs='6'>
            <p>Wartości przedmiotów</p>
            <p>
              {props.worth.split(",", props.number).map((number) => {
                return <li>{number}</li>;
              })}
            </p>
          </Col>
        </Row>
      </Container>

      <p>Liczba przedmiotów</p>
      <p>{props.number}</p>
      <p>Maksymalna waga</p>
      <p>{props.max}</p>
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

export default dynamicSummary;
