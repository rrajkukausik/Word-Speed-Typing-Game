import Score from "../components/scorebar";
import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { GameContext } from "../context";
import { useContext, useState } from "react";
import axios from "axios";

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
  const { score, level } = useContext(GameContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const classes = useStyles();

  const handleUsername = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSave = async () => {
    const data = { name, email, score, level };
    await axios
      .post("http://localhost:4000/api/v1/player/", data)
      .then((res) => {
        if (res.data.success) {
          insertSavedText();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const insertSavedText = () => {
    document.getElementById("saved-text").innerHTML = "Your score is saved!!   📩";
  };

  return (
    <div className="game-container">
      <Score />
      <div>
        <form className={classes.form} className="saveform-box" noValidate>
          <div>
            <TextField
              className={classes.field}
              onChange={handleUsername}
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
              onChange={handleEmail}
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
      <div id="saved-text"></div>

      <button className="savescorefinal-button" onClick={handleSave}>
        Save Score📩
      </button>

      <Link to="/game">
        <button className="backform-button"> Go Back 👈</button>
      </Link>
    </div>
  );
}
