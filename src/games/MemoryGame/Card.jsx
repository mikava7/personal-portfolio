import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) =>
    props.isMatched ? "#7FFF00" : props.isSelected ? "#87CEEB" : "#808080"};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: background-color 0.2s;

  @media (min-width: 396px) and (max-width: 520px) {
    width: 80px;
    height: 80px;
    margin: 0;
  }

  @media (max-width: 395px) {
    width: 70px;
    height: 70px;
    margin: 0;
  }
`;

const CardContent = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6rem;
  color: #fb7878;
  margin-bottom: 1rem;
  /* box-shadow: 0 0 1px rgba(0, 0, 0, 0.2); */
  @media (max-width: 500px) {
    font-size: 4.5rem;
    margin-bottom: 1rem;
  }
  @media (max-width: 400px) {
    font-size: 3.8rem;
    margin-bottom: 1rem;
  }
`;

const Card = ({ id, content, onClick, isMatched, isSelected }) => {
  const handleClick = () => {
    if (!isMatched && !isSelected) {
      onClick(id);
    }
  };

  return (
    <CardContainer
      isMatched={isMatched}
      isSelected={isSelected}
      onClick={handleClick}
    >
      {isMatched || isSelected ? <CardContent>{content}</CardContent> : null}
    </CardContainer>
  );
};

export default Card;
