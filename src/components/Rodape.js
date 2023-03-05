import styled from "styled-components";
import party from "../assets/party.png";
import erro from "../assets/icone_erro.png";
import sad from "../assets/sad.png"
import quase from "../assets/icone_quase.png";

function Rodape({ cards, concluida, inicio, acertos }) {

    const total = cards.length;

    return (
        <BarraInferior
            total={total}
            inicio={inicio}
            concluida={concluida}
            data-test="footer">

            <MensagemFinal
                concluida={concluida}
                total={total}
                data-test="finish-text">
                <TopoFinal>
                    <ImagemFinal
                        src={acertos.includes(erro) ? sad : party}
                        alt="emoji">
                    </ImagemFinal>
                    <TituloFinal>
                        {acertos.includes(erro) ? "Putz..." : "Parabéns"}
                    </TituloFinal>
                </TopoFinal>

                <TextoFinal>
                    {acertos.includes(erro) ? "Ainda faltam alguns... Mas não desanime"
                        : "Você não esqueceu de nenhum flashcard!"}
                </TextoFinal>

            </MensagemFinal>

            <Concluidos>
                {concluida}/{total} CONCLUÍDOS
            </Concluidos>

            <Acertos
                concluida={concluida}>
                {acertos.map((a, i) => (
                    <Lista
                        key={i}
                        src={acertos[i]}
                        alt={acertos[a]}
                        data-test={(acertos[i] === erro ? "no-icon"
                            : (acertos[i] === quase ? "partial-icon" : "zap-icon"))}></Lista>))}
            </Acertos>
        </BarraInferior>
    );
}

const BarraInferior = styled.footer`
    width: 100%;
    height: ${p => p.total === p.concluida ? "171px" : "70px"};
    background: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    ${p => p.inicio === false && "position: fixed;"}
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Acertos = styled.div`
    width: auto;
    height: 22px;
    display: ${p => p.concluida > 0 ? "flex" : "none"};
    justify-content: center;
    margin-top: 5px;
`

const Lista = styled.img`
    width: 23px;
    height: 23px;
    margin-right: 5px;
`

const Concluidos = styled.p`
    width: auto;
    height: auto;
    font-family: "Recursive", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    display: flex;
    justify-content: center;
`

const MensagemFinal = styled.div`
    width: 222px;
    height: auto;
    display: ${p => p.concluida === p.total ? "flex" : "none"};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 14px;
`

const TopoFinal = styled.div`
    display: flex;
    margin-bottom: 14px;
`

const TextoFinal = styled.p`
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #333333;
`

const ImagemFinal = styled.img`
    width: 23px;
    height: 23px;
`

const TituloFinal = styled.h2`
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    margin-left: 10px;
`

export default Rodape;