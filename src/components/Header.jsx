import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useScrollHandler from "../Hooks/HOC";
import { Link } from "react-router-dom";
const Header = () => {
  const isScrolled = useScrollHandler();

  return (
    <Container isScrolled={isScrolled}>
      <div>
        <p>Irakli</p>
      </div>
      <StyledUl>
        <StyledList to="/">Home</StyledList>
        <StyledList to="/about">About</StyledList>
        <StyledList to="/games">Games</StyledList>
        <StyledList to="/projects">Projects</StyledList>
        <StyledList to="/contact">Contact</StyledList>
      </StyledUl>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  position: sticky;
  box-sizing: border-box;

  top: 0;
  z-index: 999;
  height: 2.5rem;
  display: flex;
  justify-content: space-around;
  align-items: flex-start; /* Add this line */
  background-color: #f7f3f0;
  border-bottom: ${({ isScrolled }) =>
    isScrolled ? "0.4rem solid #484e4e" : "none"};

  p {
    font-size: 2rem;
    text-align: center;
    color: #489c9c;
  }
`;

const StyledUl = styled.ul`
  display: flex;
  gap: 1.5rem;
  font-size: 1.3rem;
  padding: 0;
  margin: 0.5rem 0;
`;
const StyledList = styled(Link)`
  text-decoration: none;
  color: #1e1f21;
  border-radius: 12px;
  transition: transform 1s ease;

  &:hover {
    color: #484e4e;
    transform: scale(1.1);

    /* transform: rotate(360deg) scale(1.5); */
  }
`;
