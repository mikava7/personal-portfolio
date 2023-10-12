import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GithubIcon from "../assets/github.svg";
import LinkedinIcon from "../assets/linkedin-in.svg";
import YoutubeIcon from "../assets/youtube.svg";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Hello! I am Irakli, a Full stack developer!";
  const typingSpeed = 100;

  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => {
      clearInterval(typingInterval);
    };
  }, []);
  return (
    <HeroContainer id="projects-section">
      <TextContainer>
        <h1>{displayedText}</h1>

        <LinksContainer>
          <ScrollLink to="contact" smooth={true} duration={500}>
            <ContactButton>Contact</ContactButton>
          </ScrollLink>

          <IconsContainer>
            <IconWrapper href="https://github.com/mikava7" target="_blank">
              <img src={GithubIcon} alt="GitHub" />
            </IconWrapper>
            <IconWrapper
              href="https://www.linkedin.com/in/irakli-mikava-b65532252/"
              target="_blank"
            >
              <img src={LinkedinIcon} alt="LinkedIn" />
            </IconWrapper>
            <IconWrapper
              href="https://youtube.com/your-youtube-link"
              target="_blank"
            >
              <img src={YoutubeIcon} alt="YouTube" />
            </IconWrapper>
          </IconsContainer>
        </LinksContainer>
      </TextContainer>
      <ImageContainer>
        <img src="public/irakli.png" alt="image" />
      </ImageContainer>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #6767dc43;

  height: 85vh;
  @media (max-width: 541px) {
    height: 80vh;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  h1 {
    width: 100%;
    font-size: 2rem;
    text-align: center;
    /* outline: 1px solid red; */
    height: 5rem;
  }

  @media (max-width: 768px) {
    flex: none;
    width: 100%;
    height: auto;
    justify-content: center;
  }
  h1 {
    @media (max-width: 541px) {
      font-size: 1.4rem;
      margin-right: 1rem;
      /* outline: 1px solid red; */
      width: 90%;
      height: 4rem;
    }
  }
`;

const ImageContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  margin: 0 auto;

  img {
    width: 60%;
    object-fit: contain;
  }
`;

const Text = styled.p`
  width: 80%;
  line-height: 1.2rem;
  text-align: center;
`;

const LinksContainer = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ContactButton = styled.button`
  font-size: 1.6rem;
  border: none;
  background-color: #004085;
  color: #fff;
  padding: 8px 16px;
  border-radius: 5px;
  margin-right: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    margin-bottom: 1rem;
    font-size: 1.4rem;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  align-content: center;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const IconWrapper = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: #000;

  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
`;

export default Hero;
