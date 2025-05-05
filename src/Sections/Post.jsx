import React, { useState } from "react";
import styled from "styled-components";

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  padding: 20px;
  background-color: #f2f0f0;
  outline: 2px solid #000;
  box-shadow: 8px 8px 0px #000;
  width: 80vw;
  box-sizing: border-box;

  @media (min-width: 768px) {
    max-width: 600px;
  }
`;

const Title = styled.h2`
  font-size: 16px;
  color: #000;
  font-weight: 500;
  font-family: Roboto, sans-serif;
  letter-spacing: 0.2px;
`;

const InputArea = styled.textarea`
  width: 90%;
  border: 2px solid #7a7b7b;
  padding: 10px;
  font-size: 16px;
  resize: none;

  &:focus {
    outline: none;
    color: #000;
    border-color: #7a7b7b;
    box-shadow: 0 0 5px #7a7b7b;
  }
`;

const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: left;
  margin: 10px;
`;

const Button = styled.button`
  background-color: #fdafaf;
  color: #000;
  font-weight: 600;
  border: none;
  padding: 10px 20px;
  border-radius: 50px;
  cursor: pointer;
  font-size: 14px;
  font-family: Roboto, sans-serif;
  letter-spacing: 0.2px;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Post = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const maxLength = 140;
  const charCount = inputValue.length;
  const charsLeft = maxLength - charCount;
  const counterColor = charsLeft < 0 ? "#E63946" : "#333";


  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    if (value.length > maxLength) {
      setError("Character limit exceeded");
    } else {
      setError("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() && inputValue.length <= maxLength) {
      const newThought = {
        text: inputValue,
        timestamp: new Date().toISOString(),
      };
      onSubmit(newThought);

      setInputValue("");
    }
  };

  return (
    <PostContainer>
      <Title>What's making you happy right now?</Title>
      <form onSubmit={handleSubmit}>
        <InputArea
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type your happy thought here"
        />
        <div style={{ color: counterColor }}>
          {charsLeft >= 0
            ? `${charCount} / ${maxLength}`
            : `${charsLeft} characters over limit`}
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <SubmitButtonContainer>
          <Button type="submit" disabled={inputValue.length === 0}>
            ❤️ Send Happy Thought ❤️
          </Button>
        </SubmitButtonContainer>
      </form>

    </PostContainer>
  );
};
