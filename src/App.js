import Perguntas from "./components/Perguntas";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import styled from "styled-components";
import cards from "./cards";
import { useState } from "react";


function App() {

  const [concluida, setConcluida] = useState(0);

  return (
    <Tela>
      <Cabecalho />
      <Perguntas 
      cards={cards}
      concluida={concluida}
      setConcluida={setConcluida}/>
      <Rodape 
      cards={cards}
      concluida={concluida}
      setConcluida={setConcluida}/>
      
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
