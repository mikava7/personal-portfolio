// import React, { useState, useEffect } from "react";
// import Card from "./Card";
// import Timer from "./Timer";
// import WinModal from "./WinModal";
// import styled from "styled-components";
// // import { cards } from "./data";
// export const cards = [
//   { id: 1, content: "🦁" },
//   { id: 2, content: "🐯" },
//   { id: 3, content: "🦊" },
//   { id: 4, content: "🐻" },
//   { id: 5, content: "🐨" },
//   { id: 6, content: "🐼" },
//   { id: 7, content: "🐭" },
//   { id: 8, content: "🐹" },
//   { id: 9, content: "🐸" },
//   { id: 10, content: "🐷" },
//   { id: 11, content: "🐮" },
//   { id: 12, content: "🐔" },
//   { id: 13, content: "🦆" },
//   { id: 14, content: "🐦" },
//   { id: 15, content: "🦢" },
//   { id: 16, content: "🦉" },
// ];

// const MemoryGame = () => {
//   const [shuffledCards, setShuffledCards] = useState([]);
//   const [selectedCards, setSelectedCards] = useState([]);
//   const [matchedCards, setMatchedCards] = useState([]);
//   const [gameTime, setGameTime] = useState(0);
//   const [isGameWon, setIsGameWon] = useState(false);

//   useEffect(() => {
//     shuffleCards();
//   }, []);

//   useEffect(() => {
//     if (matchedCards.length === cards.length) {
//       setIsGameWon(true);
//     }
//   }, [matchedCards, cards]);

//   const handleTimerComplete = (time) => {
//     setGameTime(time);
//   };

//   const handleCardClick = (cardId) => {
//     if (
//       matchedCards.includes(cardId) ||
//       selectedCards.includes(cardId) ||
//       selectedCards.length === 2
//     ) {
//       return;
//     }

//     setSelectedCards((prevSelectedCards) => [...prevSelectedCards, cardId]);

//     if (selectedCards.length === 1) {
//       const card1 = shuffledCards.find((card) => card.id === selectedCards[0]);
//       const card2 = shuffledCards.find((card) => card.id === cardId);

//       if (card1.content === card2.content) {
//         setMatchedCards((prevMatchedCards) => [
//           ...prevMatchedCards,
//           selectedCards[0],
//           cardId,
//         ]);
//       }

//       setTimeout(() => {
//         setSelectedCards([]);
//       }, 1000);
//     }
//   };

//   const handleWinModalClose = () => {
//     setIsGameWon(false);
//     setGameTime(0);
//   };

//   const shuffleCards = () => {
//     const shuffled = [...cards].sort(() => Math.random() - 0.5);
//     setShuffledCards(shuffled);
//   };

//   return (
//     <MemoryGameContainer className="Board">
//       <h1>Memory Game</h1>
//       {isGameWon ? (
//         <WinModal gameTime={gameTime} onClose={handleWinModalClose} />
//       ) : (
//         <Timer onTimerComplete={handleTimerComplete} />
//       )}
//       <div className="memory-board">
//         {shuffledCards.map((card) => (
//           <Card
//             key={card.id}
//             id={card.id}
//             content={card.content}
//             onClick={handleCardClick}
//             isMatched={matchedCards.includes(card.id)}
//             isSelected={selectedCards.includes(card.id)}
//           />
//         ))}
//       </div>
//     </MemoryGameContainer>
//   );
// };

// export default MemoryGame;
// const MemoryGameContainer = styled.div`
//   display: flex;
//   height: 100vh;
//   outline: 1px solid red;
// `;
