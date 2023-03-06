import Perguntas from "./components/Perguntas";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import BoasVindas from "./components/BoasVindas";
import styled from "styled-components";
import cards from "./cards";
import { useState } from "react";

function App() {

  const [concluida, setConcluida] = useState(0);
  const [inicio, setInicio] = useState(true);
  const [acertos, setAcertos] = useState([]);

  return (
    <>
      <Inicio inicio={inicio}>
        <BoasVindas setInicio={setInicio} />
      </Inicio>

      <Tela inicio={inicio}>

        <Cabecalho />

        <Perguntas
          cards={cards}
          concluida={concluida}
          setConcluida={setConcluida}
          setAcertos={setAcertos}
          acertos={acertos} />

        <Rodape
          cards={cards}
          concluida={concluida}
          setConcluida={setConcluida}
          inicio={inicio}
          acertos={acertos} />

      </Tela>
    </>
  );
}

const Inicio = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #FB6B6B;
  display: ${p => p.inicio === true ? "flex;" : "none;"}
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Tela = styled.div`
  width: 100%;
  height: 100%;
  background: #FB6B6B;
  ${p => p.inicio === true && "display: none;"}
  border: 1px solid #DBDBDB;
  
`;

export default App;
