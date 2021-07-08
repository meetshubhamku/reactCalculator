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
    var total = evaluate(expression);
    setResult(total);
    setExpression(total);
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
        <Toolbar>
          <Typography variant="h5">Kalc</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="xs">
        <div className={classes.box}>
          <Typography variant="h2">{result ? result : "0"}</Typography>
          <Typography variant="h6">
            {expression ? expression : "Expression"}
          </Typography>
          <Grid container spacing={1}>
            {/* Looping All digit buttons */}
            {buttonKeys.map((item, index) => {
              return (
                <Grid item key={index} xs={3} sm={3} md={3} lg={3}>
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
                <Grid item key={index} xs={3} sm={3} md={3} lg={3}>
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
            <Grid item xs={3} sm={3} md={3} lg={3}>
              <button
                className={classes.button}
                onClick={evaluateResult}
                color="secondary"
              >
                =
              </button>
            </Grid>
            {/* clear button */}
            <Grid item xs={3} sm={3} md={3} lg={3}>
              <button
                className={classes.button}
                onClick={clearResult}
                color="primary"
              >
                Clear
              </button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
}
