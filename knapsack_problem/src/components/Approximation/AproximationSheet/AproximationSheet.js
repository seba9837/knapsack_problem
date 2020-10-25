import React, { useState } from "react";
import {
  Collapse,
  Button,
  CardBody,
  Card,
  Form,
  InputGroup,
  InputGroupAddon,
  Input,
  FormGroup,
  Label,
} from "reactstrap";

const AproximationSheet = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button
        color='secondary'
        onClick={toggle}
        style={{ marginBottom: "1rem" }}
      >
        Jak wprowadzić poprawnie dane?
      </Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anAPROKSYMACJA
          </CardBody>
        </Card>
      </Collapse>
      <Form>
        <FormGroup>
          <Label>Liczba elementów</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>$</InputGroupAddon>
            <Input
              placeholder='Amount'
              min={0}
              max={100}
              type='number'
              step='1'
              onChange={props.numberChanged}
            />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label>Max</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>$</InputGroupAddon>
            <Input
              placeholder='Amount'
              min={0}
              max={100}
              type='number'
              step='1'
              onChange={props.maxWeightChanged}
            />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label>Wagi</Label>
          <Input placeholder='Dolla dolla billz yo!' onChange={props.weightChanged}/>
        </FormGroup>
        <FormGroup>
          <Label>Wartość</Label>
          <Input placeholder='Dolla dolla billz yo!' onChange={props.worthChanged}/>
        </FormGroup>
        <Button color='secondary' onClick={props.submitted}>
          Gotowe
        </Button>
      </Form>
    </div>
  );
};

export default AproximationSheet;
