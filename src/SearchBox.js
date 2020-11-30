import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  search: {
    zIndex: 5,
    position: "absolute",
    left: "28%",
    top: "10%",
    width: "800px",
    color: "white",
    backgroundColor: "white",
    opacity: 0.8,
  },
});

export default function SearchBox() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.search}>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Search Incidents"
          variant="filled"
          color="primary"
        />
      </div>
    </>
  );
}
