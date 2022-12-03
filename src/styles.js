import styled from "styled-components";

export const Conteiner = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #FAFAFA;

    // Centralizando o conteúdo
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    width: 80%;
    min-height: 350px;
    background-color: #FFF;

`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

`