import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import "./App.css";

const initialState = {
  name: "",
  email: "",
  confEmail: "",
  senha: "",
  nameError: "",
  emailError: "",
  confEmailError: "",
  senhaError: ""
};

class CadastroForm extends React.Component {
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
    let nameError = "";
    let emailError = "";
    let senhaError = "";
    let confEmailError = "";

    if (!this.state.name) {
      nameError = "Preencha com um nome válido";
    }

    if (!this.state.email.includes("@")) {
      emailError = "Email inválido";
    }

    if (!this.state.confEmail !== this.state.email) {
      confEmailError = "Email diferente";
    }

    if (!this.state.senha) {
        senhaError = "Senha inválida";
    }

    if (emailError || nameError ||  senhaError || confEmailError) {
      this.setState({ emailError, nameError,  senhaError, confEmailError });
      return false;
    }
    return true;
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Paper className="fundo-form">
          <h1 className="form-titulo">Inscreva-se</h1>
          <Grid container spacing={3}>
            <Grid className="form-cadastro" item xs={12}>
              <label htmlFor="name">Usuário:</label>
              <input
                required
                id="name"
                name="name"
                type="text"
                onChange={(e) => this.onChange(e)}
                value={this.state.name}
              />
              <div className="error">{this.state.nameError}</div>
            </Grid>
            <Grid className="form-cadastro" item xs={12}>
              <label htmlFor="name">Email:</label>
              <input
                required
                id="email"
                name="email"
                type="email"
                onChange={(e) => this.onChange(e)}
                value={this.state.email}
              />
              <div className="error">{this.state.emailError}</div>
            </Grid>
            <Grid className="form-cadastro" item xs={12}>
              <label htmlFor="name">Confimarção de email:</label>
              <input
                required
                id="confEmail"
                name="confEmail"
                type="confEmail"
                onChange={(e) => this.onChange(e)}
                value={this.state.confEmail}
              />
              <div className="error">{this.state.confEmailError}</div>
            </Grid>
            <Grid className="form-cadastro" item xs={12}>
              <label htmlFor="name">Senha:</label>
              <input
                required
                id="senha"
                name="senha"
                type="password"
                onChange={(e) => this.onChange(e)}
                value={this.state.senha}
              />
              <div className="error">{this.state.senhaError}</div>
            </Grid>
          </Grid>
          <div>
            <button
              onClick={(e) => this.onSubmit(e)}
              className="form-btn"
              type="submit"
            >
              Cadastrar
            </button>
          </div>
        </Paper>
      </form>
    );
  }
}

export default CadastroForm;
