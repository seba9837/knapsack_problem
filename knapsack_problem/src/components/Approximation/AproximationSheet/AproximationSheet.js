import React, { useState } from "react";
import {
  Collapse,
  CardBody,
  Card,
} from "reactstrap";
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CachedIcon from '@material-ui/icons/Cached';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const AproximationSheet = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
    setActiveStep(0);
  }
  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "20ch"
      }
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    actionsContainer: {
      marginBottom: theme.spacing(1),
    },
    margin: {
      marginTop: theme.spacing(2),
      marginLeft: theme.spacing(2),
      marginBottom: theme.spacing(1),
      width: "60%"
    },
    card: {
      border: "1px solid #3f51b5",
      borderRadius: "5px"
    }
  }));
  function getSteps() {
    return ['Wprowadź dane plecaka', 'Wprowadź dane przedmiotów', 'Potwierdź dane'];
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`;
      case 1:
        return 'An ad group contains one or more ads which target a shared set of keywords.';
      case 2:
        return `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`;
      default:
        return 'Unknown step';
    }
  }
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={toggle}
        style={{ marginBottom: "2rem" }}
      >
        {isOpen ? 'Zamknij pomoc' : 'Jak wprowadzić dane?'}
      </Button>

      <Collapse isOpen={isOpen}>
        <Card className={classes.card}>
          <CardBody>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((label, index) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                  <StepContent>
                    <Typography>{getStepContent(index)}</Typography>
                    <div className={classes.actionsContainer}>
                      <div>
                        <Button
                          disabled={activeStep === 0}
                          onClick={handleBack}
                          className={classes.button}
                        >
                          Wstecz
                        </Button>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleNext}
                          className={classes.button}
                        >
                          {activeStep === steps.length - 1 ? 'Zakończ' : 'Dalej'}
                        </Button>
                      </div>
                    </div>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length ? 
              <div>
                <IconButton>
                  <CachedIcon onClick={handleReset} />
                </IconButton>
                <IconButton>
                  <ArrowUpwardIcon onClick={toggle}/>
                </IconButton>
              </div>: <div>
                <IconButton>
                  <ArrowUpwardIcon onClick={toggle}/>
                </IconButton>
              </div>
            }
          </CardBody>
        </Card>
      </Collapse>
      <form className={classes.root}  >

        <TextField
          label="Liczba elementów"
          type="number"
          min={0}
          InputLabelProps={{
            shrink: true
          }}
          onChange={props.numberChanged}
          InputProps={{ inputProps: { min: 0 } }}
        />

        <TextField
          label="Maksymalna waga"
          type="number"
          InputLabelProps={{
            shrink: true
          }}
          InputProps={{ inputProps: { min: 0 } }}
          onChange={props.maxWeightChanged}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
        />
      </form>

      <TextField
        onChange={props.weightChanged}
        label="Waga"
        placeholder="Wprowadź wagę każdego elementu"
        className={classes.margin}
        fullWidth
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }} 
        InputProps={{
          endAdornment: <InputAdornment position="start">kg</InputAdornment>,
        }}
      />

      <TextField
        onChange={props.worthChanged}
        label="Wartość"
        placeholder="Wprowadź wartość każego elementu"
        className={classes.margin}
        fullWidth
        variant="outlined"
        InputLabelProps={{
          shrink: true,
          }} 
        InputProps={{
          endAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
      <div>
        <Button variant="contained" onClick={props.submitted}>Gotowe</Button>
      </div>


    </div>
  );
};

export default AproximationSheet;
