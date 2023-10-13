import React, { useState } from "react";
import styled from "styled-components";

const WinModal = ({ gameTime, onClose }) => {
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = () => {
    if (name.trim() === "") {
      return;
    }

    console.log(`Name: ${name}, Time: ${gameTime}`);
    // Close the modal
    onClose(name);
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <ModalBackground>
      <ModalContent>
        <ModalHeader>
          <h1>Congratulations !</h1>
          <p>You won the game!</p>
          <p>Your time: {gameTime} seconds</p>
        </ModalHeader>
        <ModalForm>
          <label>
            <span>Enter your name:</span>
            <input
              type="text"
              placeholder="Entrez votre nom"
              value={name}
              onChange={handleNameChange}
            />
          </label>
          <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
        </ModalForm>
        <CloseButton onClick={handleClose}>X</CloseButton>
      </ModalContent>
    </ModalBackground>
  );
};

export default WinModal;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 100;
`;

const ModalContent = styled.div`
  background-color: #fff;
  border-radius: 8px;
  max-width: 300px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const ModalHeader = styled.div`
  text-align: center;
  p {
    font-size: 1.2rem;
    margin: 10px 0;
    border-bottom: 2px dashed #007bff;
  }
`;

const ModalForm = styled.div`
  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    input {
      height: 40px;
      border: 1px solid #ccc;
      border-radius: 8px;
      padding: 8px;
    }
    span {
      margin-bottom: 5px;
    }
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 40px;
  font-size: 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 1rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

// You can adjust the styling further if needed.
