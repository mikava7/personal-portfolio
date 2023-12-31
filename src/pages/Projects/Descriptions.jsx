import React, { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import GithubIcon from "../../assets/github.svg";
import { projectDescription } from "../../components/projectDescription";
import { FaArrowDown } from "react-icons/fa";
import { floatAnimation } from "../../Styles/GlobalStyles";
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
    <ProjectCardContainer>
      {projectDescription.map((project) => (
        <ProjectCard key={project.title}>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDescription>{project.description}</ProjectDescription>
          <FeatureList ref={scrollRef} expand={expand}>
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
    </ProjectCardContainer>
  );
};

export default Descriptions;

const ProjectCardContainer = styled.div`
  max-width: 100%;
  /* outline: 3px solid green; */
`;
const ProjectCard = styled.div`
  max-width: 100%;
  padding: 20px;
  background-color: #fff;
  border-radius: 0 8px 8px 0;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  height: 543px;
  position: relative;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  /* outline: 1px solid blue; */

  @media (max-width: 541px) {
    border-radius: 0 0 8px 8px;
    max-width: 100%;
    height: 440px;
  }
`;

const ProjectTitle = styled.h3`
  text-align: center;
  margin-bottom: 10px;
  margin-top: 0px;
`;

const ProjectDescription = styled.p`
  text-indent: 1em;
  line-height: 1.6;
  font-size: 1.2rem;

  @media (min-width: 555px) and (max-width: 769px) {
    line-height: 1.4;
    font-size: 1.1;
  }
  @media (max-width: 554px) {
    line-height: 1.2;
    font-size: 1.1;
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  height: 250px;
  padding: 0.2rem 0.4rem;
  overflow-y: scroll;
  background-color: ${(props) => (props.expand ? "wheat" : "")};
  @media (min-width: 555px) and (max-width: 769px) {
    height: 200px;
  }
  @media (max-width: 554px) {
    height: 180px;
  }
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

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 85px;
  right: 40px; /* Adjust the position from the right as needed */
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
  margin-top: auto;

  @media (min-width: 555px) and (max-width: 769px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  @media (max-width: 554px) {
    margin-top: auto;
    display: flex;

    justify-content: space-around;
  }
`;

const ProjectLink = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;

  a {
    display: inline-block;
    padding: 10px 20px;
    background-color: #004085;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
  @media (min-width: 555px) and (max-width: 767px) {
    margin-left: -5px;
  }
  @media (max-width: 554px) {
    padding: 5px 10px;
    margin-left: -5px;
  }
`;

const ExpandButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #007bff;
  font-weight: bold;
  text-decoration: underline;
  transition: color 0.3s ease;

  &:hover {
    color: #0056b3;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  /* outline: 1px solid red; */
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
