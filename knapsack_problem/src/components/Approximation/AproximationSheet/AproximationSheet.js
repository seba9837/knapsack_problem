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
          <Label>Dane</Label>
          <Input placeholder='Dolla dolla billz yo!' />
        </FormGroup>
        <FormGroup>
          <Label>Inne dane</Label>
          <Input placeholder='Dolla dolla billz yo!' />
        </FormGroup>

        <FormGroup>
          <Label>Liczba czegoś tam</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>$</InputGroupAddon>
            <Input
              placeholder='Amount'
              min={0}
              max={100}
              type='number'
              step='1'
            />
          </InputGroup>
        </FormGroup>
        <Button color='secondary' onClick={props.submitted}>
          Gotowe
        </Button>
      </Form>
    </div>
  );
};

export default AproximationSheet;
