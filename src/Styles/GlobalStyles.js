import { createGlobalStyle } from "styled-components";
import styled, { keyframes, css } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* Add your global styles here */
  html,
  body {
        box-sizing:border-box;
        margin: 0;
        padding: 0;
        background-color: #bcbcfa43;
        overflow-x: hidden

  }
  p,ul{
        font-size:1.3rem;
        padding:0;
        margin:0;
  }


  /* Additional global styles */
  // ...
`;

export const ProjectHeader = styled.h1`
  position: relative;
  animation: floating 3s ease-in-out infinite;
  width: 50vw;
  text-align: center;
  margin: 2rem auto;
  padding-bottom: 0.3rem;
  cursor: pointer;

  @keyframes floating {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(
        -10px
      ); /* Adjust the value to control the float height */
    }
  }

  &::after {
    content: "";
    position: absolute;
    width: 110%;
    height: 8px;
    bottom: 0;
    left: 0;
    background: linear-gradient(
      90deg,
      transparent,
      #4e4eb1,
      transparent
    ); /* Adjust the border color */
    background-size: 200% 100%;
    animation: wave 2s linear infinite;
  }

  @keyframes wave {
    0% {
      background-position: 100% 0;
    }
    100% {
      background-position: -100% 0;
    }
  }
`;
export const floatAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
`;

export const slideInFromLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const slideInFromRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;
export default GlobalStyles;
