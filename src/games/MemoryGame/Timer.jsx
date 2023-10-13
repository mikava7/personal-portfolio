import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaPlay, FaPause } from "react-icons/fa"; // Import play and pause icons

const Timer = ({ onTimerComplete }) => {
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPaused) {
        setTime((prevTime) => prevTime + 1);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [isPaused]);

  useEffect(() => {
    onTimerComplete(time);
  }, [time, onTimerComplete]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const handlePause = () => {
    setIsPaused(true);
  };

  const handleResume = () => {
    setIsPaused(false);
  };

  return (
    <Container>
      <TimerDisplay>
        {isPaused ? (
          <FaPlay onClick={handleResume} />
        ) : (
          <FaPause onClick={handlePause} />
        )}{" "}
        {formatTime(time)}
      </TimerDisplay>
    </Container>
  );
};

export default Timer;

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  background-color: #f3f3f3;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  padding: 8px 16px;
  @media (max-width: 420px) {
    padding: 6px 12px;

    border-radius: 0.5rem;
  }
`;

const TimerDisplay = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  margin-right: 0.5rem;

  @media (max-width: 420px) {
    font-size: 1rem;
    margin-right: 0.3rem;
  }

  svg {
    cursor: pointer;
    font-size: 1.5rem;
    margin-right: 0.5rem;
    color: #6e6ef8;
  }
`;
