import React, { useState } from "react";
import {
  Container,
  Typography,
  AppBar,
  Toolbar,
  Grid,
} from "@material-ui/core";
import useStyles from "./Styles";
import { evaluate } from "mathjs";

export default function App() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState(0);

  const classes = useStyles();

  const handleClick = (event) => {
    setExpression(expression + event.target.value);
  };
  const evaluateResult = () => {
    setResult(evaluate(expression));
  };
  const clearResult = () => {
    setExpression("");
    setResult(0);
  };
  const buttonKeys = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
  const operationKeys = ["+", "-", "*", "/"];
  return (
    <>
      <AppBar position="relative">
        <Toolbar>Kalc</Toolbar>
      </AppBar>
      <Container maxWidth="xs">
        <Typography variant="h2">{result ? result : "0"}</Typography>
        <Typography variant="h6">
          {expression ? expression : "Expression"}
        </Typography>
        <Grid container spacing={1}>
          {/* Looping All digit buttons */}
          {buttonKeys.map((item, index) => {
            return (
              <Grid item key={index} xs={4} sm={4} md={4}>
                <button
                  className={classes.button}
                  onClick={handleClick}
                  color="primary"
                  value={item}
                >
                  {item}
                </button>
              </Grid>
            );
          })}
          {/* Looping All operation buttons */}
          {operationKeys.map((item, index) => {
            return (
              <Grid item key={index} xs={4} sm={4} md={4}>
                <button
                  className={classes.button}
                  onClick={handleClick}
                  color="secondary"
                  value={item}
                >
                  {item}
                </button>
              </Grid>
            );
          })}
          {/* Equal to (=) button */}
          <Grid item xs={4} sm={4} md={4}>
            <button
              className={classes.button}
              onClick={evaluateResult}
              color="secondary"
            >
              =
            </button>
          </Grid>
          {/* clear button */}
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <button
              className={classes.button}
              onClick={clearResult}
              color="primary"
            >
              Clear
            </button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
