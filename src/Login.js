import React from "react";
import Paper from "@material-ui/core/Paper";
import "./App.css";

const initialState = {
  user: "",
  userError: "",
  senha: "",
  senhaError: "",
};

class Login extends React.Component {
  state = initialState;

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      this.setState(initialState);
    }
  };

  validate = () => {
    let emailError = "";
    let senhaError = "";

    if (!this.state.email) {
      emailError = "Preencha com um email válido";
    }

    if (!this.state.email.includes("@")) {
      emailError = "Email inválido";
    }

    if (!this.state.senha) {
      senhaError = "Senha inválida";
    }

    if (emailError || senhaError) {
      this.setState({ emailError, senhaError });
      return false;
    }
    return true;
  };

  render() {
    return (
      <div className="login">
        <Paper className="login-form">
          <h1 className="login-titulo">Login</h1>
          <div className="user-input">
         
            <input
              required
              id="email"
              name="email"
              type="text"
              onChange={(e) => this.onChange(e)}
              value={this.state.email}
              placeholder="Informe seu email"
            />
          </div>
          <div className="error">{this.state.emailError}</div>

          <div className="senha-input">
         
            <input
              required
              id="senha"
              name="senha"
              type="password"
              value={this.state.senha}
              onChange={(e) => this.onChange(e)}
              placeholder="Informe sua senha"
            />
          </div>
          <div className="error">{this.state.senhaError}</div>

          <div className="login-btn">
            <button
              onClick={(e) => this.onSubmit(e)}
              className="btn"
              type="submit"
            >
              Entrar
            </button>
          </div>
        </Paper>
      </div>
    );
  }
}
export default Login;
