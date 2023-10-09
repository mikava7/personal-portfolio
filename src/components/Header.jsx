// Header.js
import React from "react";
import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  return (
    <Container>
      <Logo>Irakli</Logo>
      <Nav>
        <StyledList>
          <ScrollLink to="hero" smooth={true} duration={500}>
            Home
          </ScrollLink>
        </StyledList>
        <StyledList>
          <ScrollLink to="projects" smooth={true} duration={500}>
            Projects
          </ScrollLink>
        </StyledList>
        <StyledList>
          <ScrollLink to="contact" smooth={true} duration={500}>
            Contact
          </ScrollLink>
        </StyledList>
      </Nav>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0.5rem;
  }
`;

const Logo = styled.h1`
  font-size: 2rem;
  margin: 0;
  color: #489c9c;
`;

const Nav = styled.ul`
  display: flex;
  gap: 1.5rem;
  font-size: 1.3rem;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const StyledList = styled.li`
  cursor: pointer;
  color: #1e1f21;
  border-radius: 12px;
  transition: transform 0.3s ease;

  &:hover {
    color: #484e4e;
    transform: scale(1.1);
  }
`;
