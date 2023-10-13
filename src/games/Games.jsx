import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Games = () => {
  return (
    <Container>
      <GameCard to="/games/tictactoe">
        <CardTitle>Tic Tac Toe</CardTitle>
        <CardDescription>
          Classic game of Tic Tac Toe. Challenge a friend and see who wins!
        </CardDescription>
      </GameCard>
      <GameCard to="/games/memoryGame">
        <CardTitle>Test Your Memory</CardTitle>
        <CardDescription>
          Test your memory with this fun memory game. Match the cards to win!
        </CardDescription>
      </GameCard>
    </Container>
  );
};

export default Games;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  height: 100vh;
`;

const GameCard = styled(Link)`
  width: 300px;
  margin: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-decoration: none;
  color: #333;
  transition: transform 0.2s;
  background-color: #bcbcfa43;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  font-size: 16px;
`;
