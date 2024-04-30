import styled from 'styled-components';

interface FigureProps {
    $imageUrl: string;
    $width?: string;
    $height?: string;
}

export const Figure = styled.figure<FigureProps>`
    background-image: ${props => `url(${props.$imageUrl})`};
    background-size: cover;
    background-position: center;
    width: ${props => props.$width ?? '300px'}; 
    height: ${props => props.$height ?? '300px'}; 
    border-radius: 50%;
`;