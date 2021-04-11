import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo_spotify.png";
import Form from "react-bootstrap/form";
import Button from "react-bootstrap/Form";
import Col from "react-bootstrap/Form";

function login() {

    return (
      <div class = "formulario">  
      <Form>
        <Form.Row>
          
            <Form.Control placeholder="Enter email" />
            <Form.Control placeholder="Confirme email" />
            <Form.Control placeholder="Senha" />
            <Form.Control
              type="Como devemos chamar voce"
              placeholder="Como devemos chamar voce"
            />
            
         
        </Form.Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>



    );
  
    }
    export default login;