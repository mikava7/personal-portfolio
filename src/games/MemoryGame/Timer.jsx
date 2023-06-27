import React, { useState, useEffect } from "react";
import styled from "styled-components";
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
      <div>Timer: {formatTime(time)}</div>
      {isPaused ? (
        <button onClick={handleResume}>Reprendre</button>
      ) : (
        <button onClick={handlePause}>Pause</button>
      )}
    </Container>
  );
};

export default Timer;
const Container = styled.div`
  border: 2px solid #a4a4ff;
  padding: 1rem;
  border-radius: 1rem;
  font-size: 2rem;
  position: absolute;
  top: 50%;
  left: 10%;
  button {
    border: none;
    background-color: #a4a4ff;
    border-radius: 16px;
    width: 13rem;
    margin-top: 2rem;
  }
`;
