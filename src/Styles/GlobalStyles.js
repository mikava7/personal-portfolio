import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* Add your global styles here */
  html,
  body {
        box-sizing:border-box;
        margin: 0;
        padding: 0;

  }
  p,ul{
        font-size:1.3rem;
        padding:0;
        margin:0;
  }


  /* Additional global styles */
  // ...
`;

export default GlobalStyles;
