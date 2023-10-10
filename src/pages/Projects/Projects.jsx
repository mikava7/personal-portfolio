import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import Descriptions from "./Descriptions";
import { ProjectHeader } from "../../Styles/GlobalStyles";
const slideInFromLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInFromRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Projects = () => {
  const [isScrolled, setScrolled] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = React.useRef(null);
  const projectRef = React.useRef(null);

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
          <AnimatedElement
            isScrolled={isScrolled}
            animation={slideInFromLeft}
            initialDelay={0}
          >
            <ImageContainer>
              <img src="src/assets/image/frang.ge.png" alt="reserve" />
            </ImageContainer>
          </AnimatedElement>

          <AnimatedElement
            isScrolled={isScrolled}
            animation={slideInFromRight}
            initialDelay={0}
          >
            <TextContainer>
              <Descriptions />
            </TextContainer>
          </AnimatedElement>
        </ItemContainer>
        {/* Repeat the above structure for other items */}
      </div>
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled.div`
  height: 85vh;
  h1 {
    text-align: center;
  }
`;

const AnimatedElement = styled.div`
  opacity: ${(props) => (props.isScrolled ? 1 : 0)};
  /* outline: 1px solid black; */
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
`;

const ItemContainer = styled.div`
  display: flex;
  margin: 2rem;
  gap: 3rem;
  border-radius: 1rem;
  /* min-height: 350px; */
  /* outline: 1px solid red; */
  @media (max-width: 541px) {
    display: flex;
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  min-width: 50%;
  border-radius: 1rem;
  display: flex;
  height: 100%; /* Make sure the image takes the full height of the container */
  justify-content: center;
  /* outline: 1px solid blue; */

  img {
    width: 90%;
    border-radius: 1rem;
    height: 100%; /* Ensure the image takes the full height of its container */
    object-fit: cover; /* Preserve aspect ratio and cover the entire space */
  }
  @media (max-width: 541px) {
    min-width: 100%;
    img {
      width: 100%;
      border-radius: 1rem;
    }
  }
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  justify-content: center;
  /* outline: 1px solid blue; */
  @media (max-width: 541px) {
    min-width: 100%;
  }
`;
export default Projects;
