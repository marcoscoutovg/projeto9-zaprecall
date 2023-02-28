import cards from "../cards";
import seta from "../assets/seta_play.png"

function Perguntas() {
    return (
        <main className="perguntas">
            {cards.map((c,i) => <Questao key={i} question={c.question} answer={c.answer} number={i+1}/>)}
        </main>
    );
}

function Questao({question, answer, number}) {
    return (
        <div className="questao">
            <p className="numPergunta">Pergunta {number}</p>
            <img className="setaPlay" src={seta} alt="seta" ></img>
        </div>
    )
}

export default Perguntas;