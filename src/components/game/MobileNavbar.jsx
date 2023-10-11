import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link as ScrollLink } from "react-scroll"; // Import ScrollLink from react-scroll

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <MenuToggle>
      <input type="checkbox" checked={isMenuOpen} onChange={toggleMenu} />

      <span></span>
      <span></span>
      <span></span>
      {isMenuOpen && (
        <MobileMenu>
          <MenuItem>
            <ScrollLink
              to="hero" // Use the same target IDs as in your Header component
              smooth={true}
              duration={500}
              onClick={toggleMenu} // Close the mobile menu when a link is clicked
            >
              Home
            </ScrollLink>
          </MenuItem>
          <MenuItem>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              Projects
            </ScrollLink>
          </MenuItem>
          <MenuItem>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              Contact
            </ScrollLink>
          </MenuItem>
          <MenuItem>
            <ScrollLink
              to="PuzzleGame"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              Games
            </ScrollLink>
          </MenuItem>
        </MobileMenu>
      )}
    </MenuToggle>
  );
};

export default MobileNavbar;

// ...rest of the code

const MenuToggle = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 5%;
  left: 8%;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;
  input {
    display: flex;
    width: 30px;
    height: 32px;
    position: absolute;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
  }
  span {
    display: flex;
    width: 29px;

    height: 3px;
    margin-top: 4px;
    margin-left: 0.5rem;
    position: relative;
    background: black;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 5px 0px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
    &:first-child {
      transform-origin: 0% 0%;
    }
    &:nth-last-child(2) {
      transform-origin: 0% 100%;
    }
  }
  input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-3px, -1px);
    background: #36383f;
  }
  input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }
  input:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
  }
  input:checked ~ ul {
    transform: none;
  }
`;
const MobileMenu = styled.ul`
  overflow-x: hidden;

  padding: 0;
  list-style-type: none;
  position: absolute;
  width: 100vw;
  height: 100vh;
  box-shadow: 0 0 10px #85888c;
  margin: 0 0 0 -400px;
  padding: 50px;
  padding-top: 5rem;
  background-color: grey;
  color: black;

  -webkit-font-smoothing: antialiased;
  transform-origin: 0% 0%;
  transform: translate(-100%, 0);
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
`;
const MenuItem = styled.li`
  text-align: center;
  margin: 0;
  padding: 1.5rem 0;
  font-size: 1.4rem;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #36383f;
  }
`;
