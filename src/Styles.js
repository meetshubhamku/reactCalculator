import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  button: {
    padding: "10px 0px",
    width: "65px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#4C4C6D",
    fontWeight: "bold",
    fontSize: "1.1rem",
    color: "#B8DFD8",
  },
  box: {
    backgroundColor: "#fbf5f5",
    borderRadius: "12px",
    padding: "20px 20px",
    marginTop: "10px",
  },
}));
export default useStyles;
