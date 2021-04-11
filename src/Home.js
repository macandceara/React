import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import panodefundo from "./Plano_fundo.jpg";

function Home() {
  return (
    <div>
      <Card className="Texto_Central">
        <Card.Img src={panodefundo} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>Spotify</Card.Title>
          <Card.Text>Escolha o Premium. Experimente 1 mês grátis.</Card.Text>
          <Card.Text>
            Ouça seus artistas favoritos em qualquer lugar. Depois, R$
            16,90/mês. Termos e Condições. Curadoria de playlists. +50 milhões
            de músicas. Podcasts exclusivos. Sem limite de pulos. Cancele quando
            quiser. Descoberta de músicas.
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}
export default Home;
