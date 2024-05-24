import React from 'react'
import styled from 'styled-components';

const Layout = ({children}) => {



    return (
        <ImageContainer>
            <img src="assets/background/background_layout_type_a.jpg" alt="background" />
            <TitleContainer>SeeLook</TitleContainer>
            <ContentContainer>
                {children}
            </ContentContainer>
        </ImageContainer>
    )
}

export default Layout

const ImageContainer = styled.div`
    position: relative;
    height: 100vh;

    img {
        display: block;
        width: 100%;
        height: 100%;
    }
    
    &:after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    }
`;

const TitleContainer = styled.div`
    position: absolute;
    display: inline;
    top: -100px;
    right: 200px;
    color: white;
    font-Family: 'sans-serif';
    font-size: 220px; 
    font-weight: 700;
    letter-spacing: -20px;
    transform: rotate(-90deg);
    transform-origin: right center;
`;

const ContentContainer = styled.div`
    position: absolute;
`;


