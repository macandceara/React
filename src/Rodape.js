import logo from "./logo_spotify.png";


function Rodape() {
  const date = new Date();

  return (
    <footer>
      <div class="wrapper">
        <div class="logo">
          <img className="App-logo" src={logo} alt="Logo" />
        </div>
        <div class="coluna_a">
          <ul className="nav-footer">
            <li>
              <a href="./faq.js">Faq</a>
            </li>
            <li>
              <a href="./equipe">Equipe</a>
            </li>
          </ul>
        </div>
        <div class="coluna_b">
          <ul className="nav-footer">
            <li>
              <a href="http://Spotify.com">Link Spotify </a>
            </li>
          </ul>
        </div>
        <div>{date.toString()}</div>
      </div>
    </footer>

   
  );
}
export default Rodape;
