import styled from "styled-components";
import ImageBanner from "/growdev/landing-page-pet/image/banner.jpg"

export const Banner = styled.div`
    height: 100vh;
    background: url(${ImageBanner}) center/cover no-repeat;
    display: flex;
    border-top-left-radius: 50px; 
    border-top-right-radius: 50px; 

    div{
        position: absolute;
        bottom: 60px; /* Ajusta a distância da parte inferior do Banner */
        left: 50%; /* Centraliza horizontalmente */
        transform: translateX(-160%); /* Move a caixa de texto para a esquerda em 50% da própria largura */
        width: 350px; /* Define a largura da caixa de texto */
        padding: 20px; /* Espaçamento interno */
        background-color: rgba(0, 0, 0, 0.25); /* Cor de fundo com transparência */
        border-radius: 15px; /* Borda arredondada */
        

            h1{
                font-size: 35px;
                color: white;
                font-family:  system-ui, "Segoe UI", "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
            }
            p{
                font-size: 15px;
                color: white;
                font-family:  system-ui, "Segoe UI", "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
                margin: 20px 0 0;
            }
    }
`