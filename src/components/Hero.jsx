import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GithubIcon from "../assets/github.svg";
import LinkedinIcon from "../assets/linkedin-in.svg";
import YoutubeIcon from "../assets/youtube.svg";

const Hero = () => {
  return (
    <Container>
      <TextContainer>
        <h1>Hello! I am Irakli, a Junior MERN stack developer!</h1>
        <Text>
          I help companies from all over the world with tailor-made solutions.
          With each project, I push my work to new horizons, always putting
          quality first.
        </Text>
        <LinksContainer>
          <button>Contact</button>
          <IconsContainer>
            <IconWrapper>
              <img src={GithubIcon} alt="GitHub" />
            </IconWrapper>
            <IconWrapper>
              <img src={LinkedinIcon} alt="LinkedIn" />
            </IconWrapper>
            <IconWrapper>
              <img src={YoutubeIcon} alt="YouTube" />
            </IconWrapper>
          </IconsContainer>
        </LinksContainer>
      </TextContainer>
      <ImageContainer>
        <img
          src="https://img.freepik.com/free-vector/businessman-with-superhero-cape_23-2147617939.jpg?w=826&t=st=1687174665~exp=1687175265~hmac=0e0d4eab2e70b53e4bb4a432debe1d1a5fb82b47da0bd744f64097a1b53dc5f2"
          alt="image"
        />
      </ImageContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const ImageContainer = styled.div`
  width: 60%;
  background-color: green;
  img {
    width: 100%;
  }
`;

const TextContainer = styled.div`
  width: 40%;
  background-color: #6767dc43;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 2rem;
  h1 {
    width: 90%;
  }
`;

const Text = styled.p`
  width: 80%;
  line-height: 1.2rem;
`;
const LinksContainer = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  align-items: space-evenly;
  button {
    font-size: 1.6rem;
    border: none;
    background-color: transparent;
  }
`;
const IconsContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
  margin-left: 2rem;
  gap: 1rem;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
  img {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
`;

export default Hero;
