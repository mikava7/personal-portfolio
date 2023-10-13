import React from "react";
import styled from "styled-components";

const PlayerBoard = ({ sortedTopPlayers }) => {
  return (
    <Board>
      <h2>Best Times:</h2>
      <ul>
        {sortedTopPlayers.slice(0, 3).map((player, index) => (
          <li key={index}>
            <span className="index">{index + 1}.</span>
            <span className="player-name">{player.name}</span>
            <span className="player-time">{player.time} seconds</span>
          </li>
        ))}
      </ul>
    </Board>
  );
};

export default PlayerBoard;

const Board = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: #f3f3f3;
  border-radius: 10px;
  padding: 0 1rem;
  margin-top: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 250px;
  margin-left: auto;
  h2 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;

    li {
      display: flex;
      align-items: center;
      margin-bottom: 0.3rem;

      .index {
        font-size: 1.2rem;
        font-weight: bold;
        margin-right: 0.4rem;
      }

      .player-name {
        font-weight: bold;
        margin-right: 0.5rem;
      }

      .player-time {
        color: #777;
        font-size: 0.9rem;
      }
    }
  }
`;
