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
const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/tictactoe" element={<TicTacToe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/memoryGame" element={<MemoryGame />} />
      </Routes>
    </div>
  );
};

export default App;
