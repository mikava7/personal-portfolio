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
import PuzzleGame from "./components/game/Puzzle";
import Example from "./components/Example";
import styled from "styled-components";
const App = () => {
  return (
    <MainContainer>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/games" element={<Games />} />

        <Route path="/games/tictactoe" element={<TicTacToe />} />

        <Route path="/games/memoryGame" element={<MemoryGame />} />
      </Routes>
    </MainContainer>
  );
};
export default App;
const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  /* overflow-y: hidden; */
  outline: 1px solid #5a3085;
  margin: 0 0.2rem;
`;
