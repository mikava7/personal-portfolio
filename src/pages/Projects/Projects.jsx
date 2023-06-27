import React, { useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import Descriptions from "./Descriptions";

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

const slideInFromCenter = keyframes`
  from {
    transform: translateX(-50%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Projects = () => {
  const [isScrolled, setScrolled] = React.useState(false);
  const cardRef = React.useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const cardPosition = cardRef.current.getBoundingClientRect();
      const navbarHeight = 200; // Height of the navbar, adjust accordingly
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const cardHeight = cardRef.current.clientHeight;
      const adjustedTopPosition = cardPosition.top - navbarHeight;

      if (adjustedTopPosition < windowHeight - cardHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container>
      <div>
        <ItemContainer isScrolled={isScrolled} ref={cardRef}>
          <AnimatedElement
            isScrolled={isScrolled}
            animation={slideInFromLeft}
            initialDelay={0}
          >
            <ImageContainer>
              <img
                src="https://cdn.dribbble.com/userupload/7975121/file/original-afcf4ca1dde18dee5ca4bf9f1003369a.png?compress=1&resize=1024x768"
                alt="reserve"
              />
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
    </Container>
  );
};

const Container = styled.div``;

const ItemContainer = styled.div`
  display: flex;
  margin: 2rem;
  gap: 3rem;
  border-radius: 1rem;
`;

const AnimatedElement = styled.div`
  opacity: ${(props) => (props.isScrolled ? 1 : 0)};
  ${(props) =>
    props.isScrolled &&
    css`
      animation: ${props.animation} 1.3s ease-in-out ${props.initialDelay}s
        forwards;
    `}
`;

const ImageContainer = styled.div`
  min-width: 600px;
  border-radius: 1rem;

  img {
    width: 80%;
    border-radius: 1rem;
  }
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Projects;
