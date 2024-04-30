import styled from "styled-components";
import ImageFooter from "/growdev/landing-page-pet/image/download.jpg"

export const Footer = styled.div`
    height: 50vh;
    background: url(${ImageFooter}) center/cover no-repeat;
    display: flex;
    border-bottom-left-radius: 50px; 
    border-bottom-right-radius: 50px; 

    div{
        position: absolute;
        bottom: 60px; 
        left: 50%; 
        transform: translateX(-160%); 
        width: 350px; 
        padding: 20px;
        background-color: rgba(0, 0, 0, 0.25); 
        border-radius: 15px; 
        

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