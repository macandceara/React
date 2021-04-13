import playlists from "./map.js";
import Row from "react-bootstrap/Rom";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function player() {
  return (
    <Row>
      <Col xs={6} md={4}>
        <Image src={playlists.capa} rounded />
      </Col>
    </Row>
  );
}

export default player;
