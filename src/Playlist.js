import "./App.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import playlists from "./map.js";

function Playlist() {
    const card = playlists.map (function (playlist) {
      
      return (
        <div class="band01">
        <Card style={{ width: "20rem" }}>
          <img className="playlist.nome" src={playlist.capa} alt="capa" />
          <Card.Body>
            <Card.Title>{playlist.nome}</Card.Title>
            <Card.Text> 
              {playlist.descricao}
            </Card.Text>
            <Button variant="primary">Escute Agora</Button>
          </Card.Body>
        </Card>
      </div>

      ) 
    })
        return (
        <div class="bandas">
        {card}  
        </div>
     
    );
  }
  export default Playlist;
  
  