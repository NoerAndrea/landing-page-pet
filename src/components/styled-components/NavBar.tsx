import styled from "styled-components";

export const NavBar = styled.div`
    align-items: center;
    color: rgb(255, 255, 255);
    display: flex;
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-size: 16px;
    font-weight: 400;
    height: 60px;
    justify-content: center;
    line-height: 24px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1; /* Certifique-se de que NavBar esteja acima do Banner */
    background-color: rgba(0, 0, 0, 0.25);
    border-top-left-radius: 50px; 
    border-top-right-radius: 50px;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    ul {
        margin-top: 0;
        display: flex;
        flex-direction: row;
        padding: 0;
        list-style-type: none;
    }

    li {
        margin: 0 10px; /* Ajuste o espaçamento entre os itens conforme necessário */
    }
`;
