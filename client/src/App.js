import "./App.css";
import "./scss/Main.css";
import Instructions from "./components/instructions";
import HighScoreList from "./components/highScoresList";
import ScoreList from "./components/scoresList";
import { Switch, Route, Redirect } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Game from "./components/mainGame";
import RetryGame from "./components/gameOverMenu";
import SaveForm from "./components/saveForm";
import { GameContext } from "./context";
import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [isActive, setActive] = useState(true);
  // const [start, setStart] = useState(false);
  // const [multiplier, setMultiplier] = useState(1);
  // const [saved, setSaved] = useState(0);
  // const [username, setUsername] = useState(null);
  return (
    <div className="App">
      <Router>
        <GameContext.Provider
          value={{
            isActive,
            setActive,
            score,
            setScore,
            level,
            setLevel,
          }}
        >
          <Switch>
            <Route exact path="/" component={Instructions}></Route>
            {/* <Route path="/game" component={Game}></Route>
            <Route path="/retry" component={RetryGame}></Route> */}

            <Route exact path="/game">
              {isActive ? <Game /> : <RetryGame />}
            </Route>

            <Route path="/savescore" component={SaveForm}></Route>
            <Route path="/highscores" component={HighScoreList}></Route>
            <Route path="/allscores" component={ScoreList}></Route>
            <Redirect to="/"></Redirect>
          </Switch>
        </GameContext.Provider>
      </Router>
      {/* <Instructions /> */}
      {/* <HighScoreList /> */}
      {/* <ScoreList /> */}
      {/* <Game />  */}
      {/* {<RetryGame/>} */}
      {/* <SaveForm /> */}
      {/* <Switch>
          <Route path="/high-scores">
            <HighScoreList />
          </Route>
          <Route path="/save-score">
            {score !== 0 ? <SaveForm /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/">
            {start ? (
              isActive ? (
                <Game />
              ) : (
                <RetryMenu />
              )
            ) : (
              <Instructions setInit={setStart} />
            )}
          </Route>
        </Switch> */}
    </div>
  );
}

export default App;
