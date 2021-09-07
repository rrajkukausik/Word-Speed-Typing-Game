import Score from "../components/scorebar";
import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(26),
    color: "secondary",
  },
  field: {
    width: "500px",
    height: "50px",
    color: "primary",
  },
}));

export default function SaveForm() {
  const classes = useStyles();

  return (
    <div className="game-container">
      <Score />
      <div>
        <form className={classes.form} className="saveform-box" noValidate>
          <div>
            <TextField
              className={classes.field}
              variant="outlined"
              margin="normal"
              required
              id="username"
              label="User Name"
              name="username"
              autoFocus
            />
          </div>

          <div>
            <TextField
              className={classes.field}
              variant="outlined"
              margin="normal"
              required
              id="email"
              label="Email Address"
              name="email"
              autoFocus
            />
          </div>
        </form>
      </div>

      <button className="savescorefinal-button">Save Score📩</button>

      <Link to="/retry">
        <button className="backform-button"> Go Back 👈</button>
      </Link>
    </div>
  );
}
