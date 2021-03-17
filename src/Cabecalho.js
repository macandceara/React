import logo from "./logo_spotify.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import Faq from "./Faq";


function Cabecalho () {

 return (


<Router>
       <div> 
        <nav className="App-header">
        <img className="App-logo" src={logo} alt="Logo" />
        <ul>
          <a>|</a>
          <Link to="/Home">Home</Link>
          <a>|</a>
          <Link to="/Faq">FAQ.S</Link>
          <a>|</a>
        </ul>
      </nav>
      <Switch>
        <Route path="/Faq">
          <Faq />
        </Route>
      </Switch>
       </div>
       </Router>

 );   
}

export default Cabecalho;