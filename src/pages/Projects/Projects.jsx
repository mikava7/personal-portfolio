import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import Descriptions from "./Descriptions";
import {
  ProjectHeader,
  floatAnimation,
  slideInFromLeft,
  slideInFromRight,
} from "../../Styles/GlobalStyles";
import { projectDescription } from "../../components/projectDescription";

const Projects = () => {
  const [isScrolled, setScrolled] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = React.useRef(null);
  const projectRef = React.useRef(null);
  const [projectIndex, setProjectIndex] = useState(0);
  const scrollToTop = () => {
    projectRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const cardPosition = cardRef.current.getBoundingClientRect();
      const navbarHeight = 200; // Height of the navbar, adjust accordingly
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const cardHeight = cardRef.current.clientHeight;
      const adjustedTopPosition = cardPosition.top - navbarHeight;

      if (adjustedTopPosition < windowHeight - cardHeight && !hasAnimated) {
        setScrolled(true);
        setHasAnimated(true);
      } else if (
        adjustedTopPosition >= windowHeight - cardHeight &&
        hasAnimated
      ) {
        setHasAnimated(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasAnimated]);

  const frontend = projectDescription[projectIndex].tools.frontend;
  const backend = projectDescription[projectIndex].tools.backend;

  console.log(frontend);

  return (
    <ProjectsContainer>
      <ProjectHeader
        style={{ paddingTop: "2rem" }}
        ref={projectRef}
        onClick={scrollToTop}
      >
        Projects
      </ProjectHeader>
      <div ref={cardRef}>
        <ItemContainer isScrolled={isScrolled} ref={cardRef}>
          <AnimatedImage
            isScrolled={isScrolled}
            animation={slideInFromLeft}
            initialDelay={0}
          >
            <ImageContainer>
              <img src="src/assets/frang.ge.png" alt="reserve" />
              <Tools>
                {frontend.map((tool, index) => (
                  <Tool key={index}>{tool}</Tool>
                ))}
                {backend.map((tool, index) => (
                  <Tool key={index}>{tool}</Tool>
                ))}
              </Tools>
            </ImageContainer>
          </AnimatedImage>

          <AnimatedDescription
            isScrolled={isScrolled}
            animation={slideInFromRight}
            initialDelay={0}
          >
            <TextContainer>
              <Descriptions />
            </TextContainer>
          </AnimatedDescription>
        </ItemContainer>
        {/* Repeat the above structure for other items */}
      </div>
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled.div`
  height: 85vh;
  background-color: #bcbcfa43;

  h1 {
    text-align: center;
  }

  @media (max-width: 541px) {
    height: 100%;
  }
`;

const AnimatedElement = styled.div`
  opacity: ${(props) => (props.isScrolled ? 1 : 0)};
  margin: 0 auto;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.isScrolled &&
    css`
      animation: ${props.animation} 1.3s ease-in-out ${props.initialDelay}s
        forwards;
    `}

  @media (max-width: 541px) {
    opacity: 1;
    animation: none; /* Disable animation for mobile view */
  }
`;

const ItemContainer = styled.div`
  display: flex;
  margin: 2rem;

  border-radius: 1rem;
  height: 30%; /* Set the height to 30% */
  width: 90%; /* Set the width to 90% */
  margin: 0 auto; /* Center the container horizontally */

  @media (max-width: 541px) {
    height: auto; /* Reset height for mobile view */
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  width: 90%;
  height: 585px; /* Set a fixed height */
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  /* outline: 1px solid red; */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  img {
    max-width: 100%;
    max-height: 100%;
    width: 100%; /* Set a fixed width */
    height: 100%; /* Set a fixed height */
    border-radius: 8px 0 0 8px;
    object-fit: cover; /* Retain aspect ratio while covering */
    @media (max-width: 541px) {
      border-radius: 8px 8px 0 0;
    }
  }

  @media (max-width: 541px) {
    width: 100%;
    border-radius: 1rem 1rem 0 0;
  }
`;

const Tools = styled.div`
  position: absolute;
  bottom: 20px;
  width: 90%;
  z-index: 999;
  margin: 0 3rem;
  display: flex;
  flex-wrap: wrap;
`;
const Tool = styled.span`
  display: inline;
  padding: 0.2rem 0.4rem;
  background: #5a3085;
  color: white;
  border-radius: 8px;
  margin-left: 0.4rem;
  margin-bottom: 0.4rem;
`;
const TextContainer = styled.div`
  flex: 2;
  /* Add any other styles you need */

  @media (max-width: 541px) {
    width: 100%; /* Adjust width for mobile view */
  }
`;

const AnimatedImage = styled.div`
  opacity: ${(props) => (props.isScrolled ? 1 : 0)};
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.isScrolled &&
    css`
      animation: ${props.animation} 1.3s ease-in-out ${props.initialDelay}s
        forwards;
    `}
`;

const AnimatedDescription = styled.div`
  opacity: ${(props) => (props.isScrolled ? 1 : 0)};
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.isScrolled &&
    css`
      animation: ${props.animation} 1.3s ease-in-out ${props.initialDelay}s
        forwards;
    `}
`;

export default Projects;
