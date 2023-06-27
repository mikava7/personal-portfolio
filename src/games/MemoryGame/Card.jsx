import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) =>
    props.isMatched ? "green" : props.isSelected ? "blue" : "gray"};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const CardContent = styled.span`
  font-size: 5rem;
  color: #fb7878;
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
