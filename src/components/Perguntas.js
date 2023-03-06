import styled from "styled-components";
import IdCard from "./IdCard";

function Perguntas({ cards, concluida, setConcluida, setAcertos, acertos }) {

    return (
        <PerguntasTela>
            {cards.map((c, i) => <IdCard
                key={c.question}
                answer={c.answer}
                question={c.question}
                number={i + 1}
                concluida={concluida}
                setConcluida={setConcluida}
                setAcertos={setAcertos}
                acertos={acertos} />)}
        </PerguntasTela>
    );
}

const PerguntasTela = styled.main`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;
`;

export default Perguntas;