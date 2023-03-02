import Perguntas from "./components/Perguntas";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import styled from "styled-components";


function App() {

  return (
    <Tela>
      <Cabecalho />
      <Perguntas />
      <Rodape />
    </Tela>
  );
}

const Tela = styled.div `
  width: 100%;
  height: 100%;
  background: #FB6B6B;
  border: 1px solid #DBDBDB;
`

export default App;
