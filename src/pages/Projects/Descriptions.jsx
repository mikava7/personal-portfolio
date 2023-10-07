import React, { useState } from "react";
import styled from "styled-components";
import GithubIcon from "../../assets/github.svg";
import { projectDescription } from "../../components/projectDescription";

const Descriptions = () => {
  const [expand, setExpand] = useState(false);

  const toggleExpand = () => {
    setExpand(!expand);
  };

  return (
    <Container>
      {projectDescription.map((project) => (
        <ProjectCard key={project.title}>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDescription>{project.description}</ProjectDescription>
          <FeatureList>
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
                  View Project
                </a>
              </ProjectLink>
            )}
            {project.features.length > 2 && (
              <ExpandButton onClick={toggleExpand}>
                {expand ? "Show Less" : "Show More"}
              </ExpandButton>
            )}
          </ProjectLinks>
        </ProjectCard>
      ))}
      <IconWrapper>
        <GithubIconImg src={GithubIcon} alt="GitHub" />
        <a
          href="https://github.com/your-github-repo-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GoToGitHubButton>Go to GitHub</GoToGitHubButton>
        </a>
      </IconWrapper>
    </Container>
  );
};

export default Descriptions;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f7f3f0;
  border-radius: 12px;
`;

const ProjectCard = styled.div`
  width: 80%;
  max-width: 700px;
  margin: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

const ProjectTitle = styled.h3`
  text-align: center;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  text-indent: 1em;
  line-height: 1.4;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
`;

const Feature = styled.li`
  font-size: 1rem;
  margin: 10px 0;
`;

const FeatureTitle = styled.strong`
  font-size: 1.1rem;
`;

const FeatureDescription = styled.span`
  font-size: 1rem;
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
  color: blue;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
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
