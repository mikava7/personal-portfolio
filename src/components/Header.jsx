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
  display: flex;
  justify-content: space-around;
  align-items: flex-start; /* Add this line */
  background-color: white;
  border-bottom: ${({ isScrolled }) =>
    isScrolled ? "18px solid red" : "none"};

  p {
    font-size: 2rem;
    text-align: center;
  }
`;

const StyledUl = styled.ul`
  display: flex;
  gap: 1.5rem;
  font-size: 1.3rem;
  padding: 0;
`;
const StyledList = styled(Link)`
  text-decoration: none;

  border-radius: 12px;
  transition: transform 1s ease;

  &:hover {
    color: #4141de;
    transform: rotate(360deg) scale(1.5);
  }
`;
