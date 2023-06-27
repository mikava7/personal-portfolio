import React, { useState } from "react";
import styled from "styled-components";

const PuzzleGame = () => {
  const [movesCount, setMovesCount] = useState(0);
  const [imagesArr, setImagesArr] = useState([]);
  const [currentElement, setCurrentElement] = useState(null);

  const isTouchDevice = () => {
    try {
      document.createEvent("TouchEvent");
      return true;
    } catch (e) {
      return false;
    }
  };

  const randomNumber = () => Math.floor(Math.random() * 8) + 1;

  const getCoords = (element) => {
    const [row, col] = element.getAttribute("data-position").split("_");
    return [parseInt(row), parseInt(col)];
  };

  const checkAdjacent = (row1, row2, col1, col2) => {
    if (row1 === row2) {
      if (col2 === col1 - 1 || col2 === col1 + 1) {
        return true;
      }
    } else if (col1 === col2) {
      if (row2 === row1 - 1 || row2 === row1 + 1) {
        return true;
      }
    }
    return false;
  };

  const randomImages = () => {
    const arr = [];
    while (arr.length < 8) {
      const randomVal = randomNumber();
      if (!arr.includes(randomVal)) {
        arr.push(randomVal);
      }
    }
    arr.push(9);
    setImagesArr(arr);
  };

  const gridGenerator = () => {
    let count = 0;
    const divs = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const div = (
          <ImageContainer
            key={`${i}_${j}`}
            data-position={`${i}_${j}`}
            onClick={selectImage}
          >
            <img
              src={`image_part_00${imagesArr[count]}.png`}
              className={`image ${imagesArr[count] === 9 ? "target" : ""}`}
              data-index={imagesArr[count]}
              alt=""
            />
          </ImageContainer>
        );
        divs.push(div);
        count += 1;
      }
    }
    return divs;
  };

  const selectImage = (e) => {
    e.preventDefault();
    setCurrentElement(e.target);
    const targetElement = document.querySelector(".target");
    const currentParent = currentElement.parentElement;
    const targetParent = targetElement.parentElement;

    const [row1, col1] = getCoords(currentParent);
    const [row2, col2] = getCoords(targetParent);

    if (checkAdjacent(row1, row2, col1, col2)) {
      currentElement.remove();
      targetElement.remove();
      const currentIndex = parseInt(currentElement.getAttribute("data-index"));
      const targetIndex = parseInt(targetElement.getAttribute("data-index"));
      currentElement.setAttribute("data-index", targetIndex);
      targetElement.setAttribute("data-index", currentIndex);
      currentParent.appendChild(targetElement);
      targetParent.appendChild(currentElement);

      const currentArrIndex = imagesArr.indexOf(currentIndex);
      const targetArrIndex = imagesArr.indexOf(targetIndex);
      const newArr = [...imagesArr];
      [newArr[currentArrIndex], newArr[targetArrIndex]] = [
        newArr[targetArrIndex],
        newArr[currentArrIndex],
      ];
      setImagesArr(newArr);

      if (newArr.join("") === "123456789") {
        setTimeout(() => {
          // Game ends, display the cover screen
          // and show the result
        }, 1000);
      }

      setMovesCount((prevCount) => prevCount + 1);
    }
  };

  const startGame = () => {
    setMovesCount(0);
    setImagesArr([]);
    randomImages();
  };

  return (
    <React.Fragment>
      <CoverScreen>
        <Result>Total Moves: {movesCount}</Result>
        <StartButton onClick={startGame}>Start Game</StartButton>
      </CoverScreen>
      <Moves>Moves: {movesCount}</Moves>
      <SliderGame>
        <Container>{gridGenerator()}</Container>
        <OriginalImage>
          <img src="./showCase1.png" alt="" />
        </OriginalImage>
      </SliderGame>
    </React.Fragment>
  );
};

const CoverScreen = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #edb506;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StartButton = styled.button`
  font-size: 1.2em;
  padding: 0.8em 2em;
  border: none;
  border-radius: 3em;
  cursor: pointer;
`;

const Result = styled.p``;

const Moves = styled.div`
  position: relative;
  margin: 1em;
  text-align: right;
`;

const SliderGame = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 5%;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Container = styled.div`
  display: grid;
  width: 25em;
  height: 25em;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 8em;

  @media only screen and (max-width: 768px) {
    width: 20em;
    height: 20em;
    grid-auto-rows: 6em;
  }
`;

const OriginalImage = styled.div`
  width: 25em;
  height: 25em;

  @media only screen and (max-width: 768px) {
    width: 20em;
    height: 20em;
  }
`;

const ImageContainer = styled.div`
  border: 1px solid #ffffff;
`;

export default PuzzleGame;
