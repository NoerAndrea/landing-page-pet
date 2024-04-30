import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;  
    padding: 12px;
    text-align: center;

    h2{        
        font-weight: 350;
        font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        margin-bottom: 1rem;
        line-height: 1.5;
        text-align: center;
    }

    p {
        font-size: 1.25rem;
        font-weight: 300;
        font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        margin-bottom: 1rem;
        line-height: 1.5;
    }

    @media (min-width: 1140px) {
        width: 50%;
        text-align: start;
        margin-left: 60px;
    }
`;