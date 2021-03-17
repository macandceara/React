import logo from './logo_spotify.png';

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
                            <a href="./faq.js">Entrar</a>
                        </li>
                        <li>
                            <a href="./equipe">Equipe</a>
                        </li>
                    </ul>
                </div>
                <div class="coluna_b">
                    <ul className="nav-footer">
                        <li>
                            <a href="./logo_sporify.png">Links</a>
                        </li>
                    </ul>
                </div>
                <div>
                    {date.toString()}
                </div>
            </div>
        </footer>




    );
}
export default Rodape;