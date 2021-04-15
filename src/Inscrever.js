import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo_spotify.png";
import Form from "react-bootstrap/form";
import Badge from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./App.css";

function Inscrever() {
  return (
    <div class="formulario">
      <img className="App-logo" src={logo} alt="Logo" />
      <Form>
        <Form.Control placeholder="Enter email" />
        <Form.Control placeholder="Confirme email" />
        <Form.Control placeholder="Senha" />
        <Form.Control
          type="Como devemos chamar voce"
          placeholder="Como devemos chamar voce"
        />
        <Form>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="Masculino"
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="Feminimo"
                type={type}
                id={`inline-${type}-2`}
              />
              <Form.Check
                inline
                label="Não Binario"
                type={type}
                id={`inline-${type}-2`}
              />
            </div>
          ))}
          <Button variant="success" size="lg" Inscrever-se>
        </Form>
      </Form>
      
      Inscrever-se
    </Button>
     
    </div>
  );
}
export default Inscrever;
