import React from "react";
import Home from "./Home";
import Cabecalho from "./Cabecalho.js";
import Rodape from "./Rodape";
import Playlist from "./Playlist";
import Inscrever from "./Inscrever";
import Faq from "./Faq";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Entrar from "./Entrar.js";


function App() {
  return (
    <Router>
      <div className="App">
        <Cabecalho />

        <Switch>
          <Route path="/Faq">
            <Faq />
          </Route>
           <Route path="/Playlist">
            <Playlist />
          </Route>
          <Route path="/Inscrever-se">
            <Inscrever />
          </Route> 
          <Route path= "/Entrar">
              <Entrar />
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
