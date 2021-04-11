import logo from "./logo_spotify.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import Faq from "./Faq";

function Cabecalho() {
  return (
    
      <div>
        <nav className="App-header">
          <img className="App-logo" src={logo} alt="Logo" />
          <ul>
            <a>|</a>
            <Link to="/">Home</Link>
            <a>|</a>
            <Link to="/Faq">FAQ.S</Link>
            <a>|</a>
            <Link to="/Playlist">Playlist</Link>
            <a>|</a>
            <Link to="/Login">Login</Link>
            <a>|</a>
            <Link to="/listamusica">Player</Link>
            <a>|</a>
          </ul>
        </nav>
    </div>
    
  );
}

export default Cabecalho;
