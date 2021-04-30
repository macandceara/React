import "./App.css";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import React,{useState, useEffect} from "react";   // importaçao useState
import axios from "axios";
//Import playlists from "./map.js";


function Playlist() {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/playlist")
      .then(res => {
        const p = res.data;
        setPlaylists(p);
      })


  });
  const card = playlists.map(function (playlist) {
    return (
      <div class="capas">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={playlist.capa} />
          <Card.Body>
            <Card.Title>{playlist.nome}</Card.Title>
            <a href={playlist.musicas} class="btn btn-primary">
              Escute Agora
            </a>
            
          </Card.Body>
        </Card>
      </div>
    );
  });
  return <div class="capas">{card}</div>;
}
export default Playlist;