import React, { useState, useEffect } from "react";
import Card from "./Card";
import Timer from "./Timer";
import WinModal from "./WinModal";
import { cards } from "./data";
const MemoryGame = () => {
  const [shuffledCards, setShuffledCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [gameTime, setGameTime] = useState(0);
  const [isGameWon, setIsGameWon] = useState(false);

  useEffect(() => {
    shuffleCards();
    console.log("shuffledCards in useEfect", shuffleCards);
  }, []);

  useEffect(() => {
    if (matchedCards.length === cards.length) {
      setIsGameWon(true);
    }
  }, [matchedCards, cards]);

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
      }, 1000);
    }
  };

  const handleWinModalClose = () => {
    setIsGameWon(false);
    setGameTime(0); // Reset the game time
  };

  const shuffleCards = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setShuffledCards(shuffled);
  };

  return (
    <div className="Board">
      <h1>Memory Game</h1>
      {isGameWon ? (
        <WinModal gameTime={gameTime} onClose={handleWinModalClose} />
      ) : (
        <Timer onTimerComplete={handleTimerComplete} />
      )}
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
    </div>
  );
};

export default MemoryGame;
