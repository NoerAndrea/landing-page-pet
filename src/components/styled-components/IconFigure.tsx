import styled from 'styled-components';

interface IconFigureProps {
    $iconUrl: string;
}

export const IconFigure = styled.figure<IconFigureProps>`
    background-image: ${props => `url(${props.$iconUrl})`};
    background-size: cover;
    background-position: center;
    width: 60px; 
    height: 60px; 
    margin-bottom: 10px;
    margin-left: 100px;
    color: gray
`;

