import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const Layout = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'assets/background/background_a.jpg',
    'assets/background/background_b.jpg',
    'assets/background/background_c.jpg'
  ];
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId); // Cleanup
  }, []);
  
  

  return (
    <ImageContainer>
       {images.map((image, index) => (
        <BackgroundImage
          key={index}
          src={image}
          alt={`background ${index}`}
          active={index === currentIndex}
        />
      ))}
      <TitleContainer>SeeLook</TitleContainer>
      <ContentContainer>{children}</ContentContainer>
    </ImageContainer>
  );
};

export default Layout;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; // 이미지가 부모 요소 덮기
  opacity: ${({ active }) => (active ? 1 : 0)};
  transition: opacity 1s ease-in-out;
  animation: ${({ active }) => (active ? fadeIn : '')} 1s ease-in-out;
`;

const ImageContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden; ////컨테이너 벗어나는 콘텐츠 숨기기

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover; ////이미지가 부모 요소 덮기
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    z-index: 1;
  }
`;

const TitleContainer = styled.div`
  position: absolute;
  display: inline;
  top: -100px;
  right: 200px;
  color: white;
  font-family: "sans-serif";
  font-size: 220px;
  font-weight: 700;
  letter-spacing: -20px;
  transform: rotate(-90deg);
  transform-origin: right center;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 120px;
    top: -50px;
    right: 50px;
  }

  @media (max-width: 480px) {
    font-size: 80px;
    top: -30px;
    right: 20px;
  }
`;

const ContentContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 100%;
  max-width: 500px;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    max-width: 80%;
  }

  @media (max-width: 480px) {
    max-width: 90%;
    padding: 10px;
  }
`;
