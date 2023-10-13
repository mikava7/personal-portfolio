// Header.js
import React from "react";
import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import MobileNavbar from "./game/MobileNavbar";
const Header = () => {
  return (
    <Container>
      <Logo>
        <StyledLink to="/">Irakli</StyledLink>
      </Logo>
      <MobileNavbarBox>
        <MobileNavbar />
      </MobileNavbarBox>
      <Nav>
        <StyledList>
          <ScrollLink to="hero" smooth={true} duration={500}>
            <StyledLink to="/">Home</StyledLink>
          </ScrollLink>
        </StyledList>
        <StyledList to="/home">
          <ScrollLink to="projects" smooth={true} duration={500}>
            <StyledLink to="/">Projects</StyledLink>
          </ScrollLink>
        </StyledList>
        <StyledList>
          <ScrollLink to="contact" smooth={true} duration={500}>
            <StyledLink to="/">Contact</StyledLink>
          </ScrollLink>
        </StyledList>
        <StyledList>
          <StyledLink to="/games">games</StyledLink>
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
    padding: 0.5rem;
  }
`;

const Logo = styled.h1`
  font-size: 2rem;
  margin: 0;
  color: #489c9c;
`;
const MobileNavbarBox = styled.span`
  display: none;
  @media (max-width: 568px) {
    display: flex;
  }
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
  @media (max-width: 548px) {
    display: none;
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
const StyledLink = styled(Link)`
  cursor: pointer;
  color: #1e1f21;
  border-radius: 12px;
  transition: transform 0.3s ease;
  text-decoration: none;

  &:hover {
    color: #484e4e;
    transform: scale(1.1);
  }
`;
