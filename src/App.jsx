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

const Heading = styled.h1`
  font-size: 24px;
  color: #000;
  text-align: center;
  font-weight: 500;
  font-family: Monospace, monospace;
  letter-spacing: 0.2px;
`;

export const App = () => {
  const [happyThought, setHappyThought] = useState("");

  const handleFormSubmit = (text) => {
    setHappyThought(text);
  };

  return (
    <Container>
      <Heading>Happy Thoughts ❤️</Heading>
      <Post onSubmit={handleFormSubmit} />
      <View happyThought={happyThought} />
    </Container>
  );
};
