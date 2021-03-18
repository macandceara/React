import "./App.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import pinkfloyd from "./pinkfloyd.jpg";
import beatles from "./beatles.jpg";
import pinduca from "./pinduca.jpg";
import Faq from "./Faq";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div class="bandas">
      <div class="band01">
        <Card style={{ width: "30rem" }}>
          <img className="pinkfloyd" src={pinkfloyd} alt="pinkfloyd" />
          <Card.Body>
            <Card.Title>Pink Floyd</Card.Title>
            <Card.Text>
              Escute Agora os maiores sucessos de uma das maiores bandas de Rock
              Psicodelico da inglaterra
            </Card.Text>
            <Button variant="primary">Escute Agora</Button>
          </Card.Body>
        </Card>
      </div>

      <div class="band02">
        <Card style={{ width: "30rem" }}>
          <img className="beatles" src={beatles} alt="beatles" />
          <Card.Body>
            <Card.Title>Beatles</Card.Title>
            <Card.Text>
              Escute Agora os maiores sucessos de uma das melhores bandas do
              mundo: John, paul, Ringo e George
            </Card.Text>
            <Button variant="primary">Escute Agora</Button>
          </Card.Body>
        </Card>
      </div>

      <div class="band03">
        <Card style={{ width: "30rem" }}>
          <img className="pinduca" src={pinduca} alt="pinduca" />
          <Card.Body>
            <Card.Title>Pinduca</Card.Title>
            <Card.Text>
              Escute Agora o sucesso da cidade Belem do Pará com o rei do
              carimbó
            </Card.Text>
            <Button variant="primary">Escute Agora</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
export default Home;
