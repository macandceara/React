import React from "react";
import Home from "./Home";
import Cabecalho from "./Cabecalho.js";
import Rodape from "./Rodape";
import Faq from "./Faq"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">

      <Cabecalho />
      <Switch>
          <Route path="/Faq">
            <Faq />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

      <Rodape />
    </div>
    </Router>
  );
}

export default App;
