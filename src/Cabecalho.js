import logo from "./logo_spotify.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";


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
            <Link to="/Inscrever-se">Inscrever-se</Link>
            <a>|</a>
            <Link to="/Login">Login</Link>
            <a>|</a>
          </ul>
        </nav>
    </div>
    
  );
}

export default Cabecalho;
