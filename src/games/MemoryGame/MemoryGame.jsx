import React, { useState, useEffect } from "react";
import Card from "./Card";
import Timer from "./Timer";
import WinModal from "./WinModal";
import PlayerBoard from "./PlayerBoard";
import { cards } from "./data";
import styled from "styled-components";
const MemoryGame = () => {
  const [shuffledCards, setShuffledCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [gameTime, setGameTime] = useState(0);
  const [isGameWon, setIsGameWon] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [topPlayers, setTopPlayers] = useState([
    { name: "Irakli", time: 22 },
    { name: "Giuse", time: 18 },
    { name: "Giuse", time: 21 },
  ]);

  useEffect(() => {
    shuffleCards();
  }, []);

  useEffect(() => {
    if (matchedCards.length === cards.length) {
      setIsGameWon(true);
    }
  }, [matchedCards]);

  const handleTimerComplete = (time) => {
    setGameTime(time);
  };

  const handleCardClick = (cardId) => {
    if (
      matchedCards.includes(cardId) ||
      selectedCards.includes(cardId) ||
      selectedCards.length === 2
    ) {
      return;
    }

    if (!isGameStarted) {
      setGameTime(0);
      setIsGameStarted(true);
    }

    setSelectedCards((prevSelectedCards) => [...prevSelectedCards, cardId]);

    if (selectedCards.length === 1) {
      const card1 = shuffledCards.find((card) => card.id === selectedCards[0]);
      const card2 = shuffledCards.find((card) => card.id === cardId);

      if (card1.content === card2.content) {
        setMatchedCards((prevMatchedCards) => [
          ...prevMatchedCards,
          selectedCards[0],
          cardId,
        ]);
      }

      setTimeout(() => {
        setSelectedCards([]);
      }, 500);
    }
  };

  const handleWinModalClose = (name) => {
    const player = { name, time: gameTime };
    setTopPlayers((prevTopPlayers) => [...prevTopPlayers, player]);

    setIsGameWon(false);
    setIsGameStarted(false);
    setGameTime(0);
    setSelectedCards([]);
    setMatchedCards([]);
    shuffleCards();
  };

  const shuffleCards = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setShuffledCards(shuffled);
  };

  const handleRestartGame = () => {
    setIsGameStarted(false);
    setGameTime(0);
    setSelectedCards([]);
    setMatchedCards([]);
    shuffleCards();
  };

  // Sort the top players based on their completion time in ascending order
  const sortedTopPlayers = [...topPlayers].sort((a, b) => a.time - b.time);

  return (
    <Container>
      <h1>Tester votre Mémoire.</h1>
      <PlayerBoard sortedTopPlayers={sortedTopPlayers} />

      <RestartButton onClick={handleRestartGame}>
        {" "}
        Recommencer le jeu.
      </RestartButton>

      {isGameWon ? (
        <WinModal gameTime={gameTime} onClose={handleWinModalClose} />
      ) : (
        <MemoryBoard>
          {isGameStarted ? (
            <Timer onTimerComplete={handleTimerComplete} />
          ) : null}
          <div className="memory-board">
            {shuffledCards.map((card) => (
              <Card
                key={card.id}
                id={card.id}
                content={card.content}
                onClick={handleCardClick}
                isMatched={matchedCards.includes(card.id)}
                isSelected={selectedCards.includes(card.id)}
              />
            ))}
          </div>
        </MemoryBoard>
      )}
    </Container>
  );
};

export default MemoryGame;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  background-color: #ead88940;
`;

const MemoryBoard = styled.div`
  gap: 2rem;
  button {
    font-size: 2rem;

    align-items: center;
  }
`;
const RestartButton = styled.div`
  font-size: 2rem;
  padding: 1rem;
  background-color: #fade6e;
  position: absolute;
  left: 10%;
  top: 15%;
  border-radius: 12px;
`;
