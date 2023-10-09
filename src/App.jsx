import React from "react";
import TicTacToe from "./games/TicTacToe/TicTacToe";
import Header from "./components/Header";
import Games from "./games/Games";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Hero from "./components/Hero";
import MemoryGame from "./games/MemoryGame/MemoryGame";
import { Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects/Projects";
import ScrollDownArrow from "./components/ScrollDownArrow";
import { Element } from "react-scroll";

const App = () => {
  return (
    <div>
      <Header />
      <Element name="hero">
        <Hero />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
};
export default App;
