import "./styles/reset.css"
import "./styles/style.css"
import logo from "./assets/logo.png"
import Perguntas from "./components/Perguntas"

/* COMPONENTIZAÇÃO
App() {
  <Header />
  <Main />
  <Footer />
}
*/

function App() {
  return (
    <div className="tela">
      <header className="cabecalho">
        <img className="logo" src={logo} alt="logo"></img>
        <h1 className="titulo">ZapRecall</h1>

      </header>

      <Perguntas />

      <footer className="rodape">
        <p className="concluidos">0/4 CONCLUÍDOS</p>
      </footer>
    </div>
  );
}

export default App;
