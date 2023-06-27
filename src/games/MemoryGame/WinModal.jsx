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
    <Modal>
      <div>
        <h1>Félicitations !</h1>
        <p>Vous avez gagné la partie !</p>
        <p>Votre temps: {gameTime} secondes</p>

        <label>
          <span>Entrez votre nom:</span>
          <input
            type="text"
            placeholder="Entrez votre nom"
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
        <CloseButton onClick={handleClose}>X</CloseButton>
      </div>
    </Modal>
  );
};

export default WinModal;
const Modal = styled.div`
  min-width: 30rem;
  min-height: 30rem;

  position: fixed;
  top: 50%;
  left: 0;

  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #efd2d2;
  position: relative;

  div {
    background-color: #e3c7c7;
    min-width: 20rem;
    min-height: 20rem;
    text-align: center;
    position: relative;
    p {
      font-size: 1.2rem;
      border-bottom: 2px dashed blue;
    }
  }
  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    input {
      height: 2rem;
      width: 80%;
      align-self: center;
      border-radius: 12px;
    }
    span {
      margin-bottom: 0.5rem;
    }
    input::placeholder {
      color: #999;
      padding-left: 0.5rem;
      font-style: italic;
    }
  }
`;
const CloseButton = styled.button`
  font-size: 1rem;
  position: absolute;
  top: 5%;
  right: 3%;
  border: none;
  border-radius: 50%;
  background-color: transparent;
  height: 1rem;
  cursor: pointer;
`;
const SubmitButton = styled.button`
  width: 80%;
  height: 2.8rem;
  font-size: 1.5rem;
  border: none;
  background-color: #9a5de4;
  color: white;
  cursor: pointer;
  border-radius: 12px;
  &:hover {
    background-color: white;
    color: #5d5de4;
  }
`;
