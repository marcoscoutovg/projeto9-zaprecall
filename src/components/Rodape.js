import { useState } from "react";
import styled from "styled-components";

function Rodape({cards, concluida}) {

    const total = cards.length;

    return (
        <BarraInferior data-test="footer">
            <Concluidos>{concluida}/{total} CONCLUÍDOS</Concluidos>
        </BarraInferior>
    );
}

const BarraInferior = styled.footer`
    width: 100%;
    height: 70px;
    background: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Concluidos = styled.p`
    width: 180px;
    height: 22px;
    font-family: 'Recursive', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
`

export default Rodape;