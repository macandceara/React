import logo from './logo_spotify.png';
import plano_fundo from './Plano_fundo.jpg'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
 return (
  <div className="App">
  <header className="App-header">
    <nav className="Barranavegacao">
       <img className="App-logo" src={logo} alt="Logo" />
      <ul>
          <a>|</a>
           <a href="./faq.js">Entrar</a>
          <a>|</a>
      </ul>
    </nav>
  </header> 
  <body>
        <div>
        <img className="plano_fundo" src={plano_fundo} alt="plano_fundo"/>
        </div>
      </body>

      <footer>
      <div class="wrapper">
        <div class="logo">
          <img className="App-logo" src={logo} alt="Logo" />
          <h5> SPOTIFY</h5>
        </div>

        <div class="coluna_a">
          <ul className="nav-footer">
            <li>
              <a href="./faq.js">Entrar</a>
            </li>
             <li>
             <a href="#">Equipe</a>
            </li>
           </ul>
        </div>
          <div class="coluna_b">
          <ul className="nav-footer">
            <li>
              <a href="#">Links</a>
            </li>
            <li>
                <a href="#">Suporte</a>
            </li>
           </ul>
        </div>
     </div>
       </footer>
    </div>

 
 

  

      
  );
}

export default App;