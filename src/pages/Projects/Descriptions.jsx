import React, { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import GithubIcon from "../../assets/github.svg";
import { projectDescription } from "../../components/projectDescription";
import { FaArrowDown } from "react-icons/fa";

const Descriptions = () => {
  const [expand, setExpand] = useState(false);
  const scrollRef = useRef(null);

  const toggleExpand = () => {
    setExpand(!expand);
  };

  const scrollDown = () => {
    if (scrollRef.current) {
      const featureHeight = scrollRef.current.firstElementChild.clientHeight;
      scrollRef.current.style.scrollBehavior = "smooth";
      scrollRef.current.scrollBy(0, featureHeight);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", () => {
        if (scrollRef.current.style.scrollBehavior === "smooth") {
          scrollRef.current.style.scrollBehavior = "auto";
        }
      });
    }
  }, []);

  return (
    <Container>
      {projectDescription.map((project) => (
        <ProjectCard key={project.title}>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDescription>{project.description}</ProjectDescription>
          <FeatureList ref={scrollRef}>
            {project?.features
              .slice(0, expand ? project.features.length : 2)
              .map((feature) => (
                <Feature key={feature.title}>
                  <FeatureTitle>{feature.title}:</FeatureTitle>
                  <FeatureDescription>{feature.description}</FeatureDescription>
                </Feature>
              ))}
          </FeatureList>
          <ProjectLinks>
            {project.projectLink && (
              <ProjectLink>
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                </a>
              </ProjectLink>
            )}
            <IconWrapper>
              <GithubIconImg src={GithubIcon} alt="GitHub" />
              <a
                href="https://github.com/your-github-repo-link"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </IconWrapper>
            {project.features.length > 2 && (
              <ExpandButton onClick={toggleExpand}>
                {expand ? "Show Less" : "Show More"}
              </ExpandButton>
            )}
          </ProjectLinks>
          {expand && (
            <ScrollIndicator onClick={scrollDown}>
              <FaArrowDown />
            </ScrollIndicator>
          )}
        </ProjectCard>
      ))}
    </Container>
  );
};

export default Descriptions;

// Styled components...

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f7f3f0;
  border-radius: 12px;
  /* outline: 1px solid red; */
`;
const ProjectCard = styled.div`
  width: 80%;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
`;

const ProjectTitle = styled.h3`
  text-align: center;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  text-indent: 1em;
  line-height: 1.6; /* Increase line height for better readability */
  font-size: 1.2rem; /* Adjust font size as needed */
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  height: 250px;
  overflow-y: scroll;
`;

const Feature = styled.li`
  font-size: 1rem;
  margin: 10px 0;
`;

const FeatureTitle = styled.strong`
  font-size: 1.1rem;
  margin-left: 1em; /* Add space between feature title and description */
`;

const FeatureDescription = styled.span`
  font-size: 1rem;
`;
const floatAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
`;

const ScrollIndicator = styled.div`
  position: fixed;
  bottom: 50px;
  right: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
  animation: ${floatAnimation} 1s ease-in-out infinite;
  opacity: 0.7;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const ProjectLink = styled.div`
  text-align: center;

  a {
    display: inline-block;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const ExpandButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #007bff; /* Use a contrasting color */
  font-weight: bold;
  text-decoration: underline; /* Underline the button text */
  transition: color 0.3s ease;

  &:hover {
    color: #0056b3; /* Change color on hover */
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 20px;
`;

const GithubIconImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

const GoToGitHubButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
