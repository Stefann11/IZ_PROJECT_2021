import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AttacksPage from "./pages/AttacksPage";
import BayesPage from "./pages/BayesPage";
import CalculatorPage from "./pages/CalculatorPage";
import CaseBaseReasoningPage from "./pages/CaseBaseReasoningPage";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <AttacksPage />
          </Route>
          <Route exact path="/cbr">
            <CaseBaseReasoningPage />
          </Route>
          <Route exact path="/bayes">
            <BayesPage />
          </Route>
          <Route exact path="/calculator">
            <CalculatorPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
