import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Faq() {
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            1) Como faço para postar um música no Spotify?
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            Para colocar sua música no Spotify, você precisa trabalhar com um
            distribuidor ou com uma gravadora que já tenha um distribuidor. Eles
            lidam com todo o licenciamento e distribuição e pagam os royalties
            do streaming. Se você atualmente não tem um distribuidor, verifique
            o diretório de fornecedores para ver os distribuidores preferenciais
            e recomendados que atendem aos nossos padrões de fornecimento de
            metadados de qualidade e proteção contra violação.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            2) Como eu verifico meu perfil de artista no Spotify? Fácil! Basta
            solicitar acesso ao Spotify para Artistas .
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            Assim que sua solicitação for concedida, seu perfil de artista
            receberá a marca de verificação e você terá acesso a um painel de
            dados de escuta! Você também poderá gerenciar as imagens, a história
            do seu perfil e muito mais.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            3) Como faço o login no Spotify para Artistas?
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            Para fazer login no Spotify for Artists, primeiro você precisa
            acessar um perfil de artista. Confira Como obtenho acesso ao Spotify
            para Artistas? para obter ajuda para reivindicar seu perfil de
            artista. Se você já tem acesso, faça login com o mesmo endereço de
            e-mail e senha que usa para o aplicativo Spotify. Se você esqueceu
            seu endereço de e-mail ou senha da conta do Spotify, verifique o
            site de suporte do Spotify para saber o que fazer a seguir.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}
export default Faq;
