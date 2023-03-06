import logo from "../assets/logo.png";
import styled from "styled-components";

function BoasVindas({ setInicio }) {

    function iniciar() {
        setInicio(false);
    }

    return (
        <>
            <LogoInicio
                src={logo}
                alt='logo'>
            </LogoInicio>

            <TituloInicio>
                ZapRecall
            </TituloInicio>

            <BotaoInicio
                data-test="start-btn"
                onClick={iniciar}>Iniciar Recall
            </BotaoInicio>
        </>
    );
}

const LogoInicio = styled.img`
    width: 136px;
    height: 161px;
    margin-bottom: 13px;
`;

const TituloInicio = styled.h1`
    width: 257px;
    height: 59px;
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.012em;
    color: #FFFFFF;
    justify-content: center;
    margin-bottom: 30px;
`;

const BotaoInicio = styled.button`
    width: 246px;
    height: 54px;
    background: #FFFFFF;
    border: 1px solid #D70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #D70900;
    margin-bottom: 80px;
`;

export default BoasVindas;