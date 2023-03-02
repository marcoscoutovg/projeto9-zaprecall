import logo from "../assets/logo.png"
import styled from "styled-components";

function Cabecalho() {
    return (
        <Topo>
            <Logo src={logo} alt="logo"></Logo>
            <Titulo>ZapRecall</Titulo>
        </Topo>
    );
}

const Topo = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 45px;
    margin-bottom: 25px;
`

const Logo = styled.img`
    width: 52px;
    height: 60px;
`

const Titulo = styled.h1`
    width: 203.17px;
    height: 44px;
    font-family: 'Righteous', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    letter-spacing: -0.012em;
    color: #FFFFFF;
    transform: rotate(0.58deg);
`

export default Cabecalho;