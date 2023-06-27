import React from "react";
import styled from "styled-components";
import GithubIcon from "../../assets/github.svg";

const Descriptions = () => {
  return (
    <Container>
      <h2>project name</h2>
      <p>
        The Reserve App is a cutting-edge mobile application designed to
        revolutionize the way people make reservations for various services and
        venues. With its intuitive interface and powerful features, the app
        provides a seamless and convenient booking experience. Users can
      </p>
      <IconWrapper>
        <img src={GithubIcon} alt="GitHub" />
        <button>Go to</button>
      </IconWrapper>
    </Container>
  );
};

export default Descriptions;
const Container = styled.div`
  max-width: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid blue;
  border-radius: 12px;
  border h2 {
    text-align: center;
  }
  p {
    text-indent: 1em;
    padding: 1rem;
    line-height: 1.4;
  }
`;
const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
`;
