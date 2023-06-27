import React from "react";
import styled from "styled-components";
const PlayerBoard = ({ sortedTopPlayers }) => {
  return (
    <Board>
      <h2>Meilleurs temps:</h2>
      {sortedTopPlayers.slice(0, 3).map((player, index) => (
        <ul key={index}>
          <li>
            <span className="index">{index + 1}.</span>
            <span>{player.name}--+-</span>
            <span>{player.time} secondes</span>
          </li>
        </ul>
      ))}
    </Board>
  );
};

export default PlayerBoard;
const Board = styled.div`
  display: flex;
  position: absolute;
  right: 5%;
  top: 15%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 2px solid #6e6ef8;
  border-radius: 1rem;
  padding: 1rem;
  h2 {
  }
  ul {
    li {
      text-decoration: none;
      list-style-type: none;
      span {
        font-size: 1.5rem;
        margin-right: 0.5rem;

        font-weight: bold;
      }
    }
  }
`;
