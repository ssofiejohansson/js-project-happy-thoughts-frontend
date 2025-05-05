import React, { useState } from "react";
import { Post } from "./Sections/Post";
import { View } from "./Sections/View";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 30px;
`;

const BaseHeading = styled.h1`
  color: #000;
  text-align: center;
  font-weight: 500;
  font-family: Monospace, monospace;
  letter-spacing: 0.2px;
`;

const Heading = styled(BaseHeading)`
  font-size: 24px;
`;

const SubHeading = styled(BaseHeading)`
  font-size: 16px;
`;

const RedText = styled.span`
  color: #E63946;
`;


export const App = () => {
  const [happyThoughts, setHappyThoughts] = useState([]);

  const handleFormSubmit = (newThought) => {
    setHappyThoughts((prevThoughts) => [newThought, ...prevThoughts]);
  };

  const handleReset = () => {
    setHappyThoughts([]);
  };

  return (
    <Container>
      <Heading>Welcome to Happy Thoughts ❤️</Heading>
      <SubHeading>Trying to make the world a better place, <RedText>one thought at a time.</RedText></SubHeading>
      <Post onSubmit={handleFormSubmit} />
      <View happyThoughts={happyThoughts} onReset={handleReset} />
    </Container>
  );
};
