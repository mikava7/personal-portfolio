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
    { name: "Giuse", time: 121 },
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
      <TopPart>
        <PlayerBoard sortedTopPlayers={sortedTopPlayers} />
        {isGameStarted ? (
          <TimeAndRestart>
            <Timer onTimerComplete={handleTimerComplete} />
            <RestartButton onClick={handleRestartGame}> Restart</RestartButton>
          </TimeAndRestart>
        ) : null}
      </TopPart>

      {isGameWon ? (
        <WinModal gameTime={gameTime} onClose={handleWinModalClose} />
      ) : (
        <MemoryBoard>
          <Board>
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
          </Board>
        </MemoryBoard>
      )}
    </Container>
  );
};

export default MemoryGame;

const Container = styled.div`
  max-width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
  position: relative;
  background-color: #ead88940;
  margin: 0;
  padding: 0;
  /* outline: 1px solid red; */
`;
const TopPart = styled.div`
  height: 25%;
  @media (max-width: 441px) {
  }
`;
const MemoryBoard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  /* outline: 1px solid red; */
  button {
    font-size: 2rem;
    margin-top: 2rem;
  }

  @media (max-width: 420px) {
    max-width: 100%;
    gap: 0.4rem;
  }
`;

const TimeAndRestart = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 0.5rem;
`;
const RestartButton = styled.div`
  background-color: #004085;
  color: #fff;
  padding: 8px 16px;
  border-radius: 1rem;
  font-size: 1.2rem;
`;

const Board = styled.div`
  display: grid;
  gap: 1rem;
  padding: 1rem 0;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  justify-content: center;

  @media (max-width: 420px) {
    gap: 0.5rem;
  }
`;
