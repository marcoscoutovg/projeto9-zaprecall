import cards from "../cards";
import setaPlay from "../assets/seta_play.png"
import setaVirar from "../assets/seta_virar.png"
import styled from 'styled-components';
import { useState } from "react";



function Perguntas() {

    return (
        <PerguntasTela>
            {cards.map((c, i) => <IdCard
                key={c.question}
                answer={c.answer}
                question={c.question}
                number={i + 1} />)}
        </PerguntasTela>
    );
}

function IdCard({ question, number, answer }) {

    const [textoCard, setTextoCard] = useState("Pergunta");
    const [status, setStatus] = useState('numPergunta');

    function clicarPlay() {
        setTextoCard(question);
        setStatus('Pergunta');
    }

    function clicarVirar() {
        setTextoCard(answer);
        setStatus('Resposta');
    }

    return (
        <Questao status={status}>
            <TextCard data-test="flashcard-text" status={status}>{textoCard} {(status === "numPergunta" && number)}</TextCard>
            <SetaPlay data-test="play-btn" status={status} onClick={clicarPlay} src={setaPlay} alt="seta" ></SetaPlay>
            <SetaVirar data-test="turn-btn" status={status} onClick={clicarVirar} src={setaVirar}></SetaVirar>
            <Opcoes status={status}>
                <NaoLembrei data-test="no-btn"><p>Não Lembrei</p></NaoLembrei>
                <QuaseNaoLembrei data-test="partial-btn"><p>Quase não lembrei</p></QuaseNaoLembrei>
                <Zap data-test="zap-btn"><p>Zap!</p></Zap>
            </Opcoes>
        </Questao>
    );
}

const PerguntasTela = styled.main`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;
`;

const Questao = styled.div`
    width: 300px;
    height: ${p => (p.status === 'numPergunta') ? '65px' : '131px'};
    margin-top: 25px;
    background: ${p => (p.status === 'numPergunta') ? '#FFFFFF' : '#FFFFD4'};
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: ${p => (p.status === 'numPergunta') ? 'center' : 'flex-start'};
    justify-content: space-between;
    flex-direction: ${p => p.status === 'Resposta' && 'column'}
`

const TextCard = styled.p`
    width: 280px;
    height: auto;
    font-family: 'Recursive', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 19px;
    color: #333333;
    margin-left: 15px;
    margin-top: ${p => (p.status !== 'numPergunta') && '10px'};
`
const SetaPlay = styled.img`
    margin-right: 15px;
    display: ${p => p.status !== 'numPergunta' && 'none'}
`

const SetaVirar = styled.img`
    margin-top: ${p => (p.status === 'Pergunta') && '105px'};
    margin-right: ${p => (p.status === 'Pergunta') && '15px'};
    display: ${p => !(p.status === 'Pergunta') && 'none'};
`

const Opcoes = styled.div`
    width: 300px;
    display: ${p => (p.status === 'Resposta') ? 'flex' : 'none'};
    justify-content: space-between;
    padding-bottom: 10px;
    padding-left: 17px;
    padding-right: 12px;

    p {
        width: 75.88px;
    height: 37.17px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
    }
`

const NaoLembrei = styled.button`
    width: 85.17px;
    height: 37.17px;
    background: #FF3030;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const QuaseNaoLembrei = styled.button`
    width: 85.17px;
    height: 37.17px;
    background: #FF922E;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Zap = styled.button`
    width: 85.17px;
    height: 37.17px;
    background: #2FBE34;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default Perguntas;