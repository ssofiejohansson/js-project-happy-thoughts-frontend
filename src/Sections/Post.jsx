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
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`;

const Button = styled.button`
  background-color: #fdafaf;
  color: #000;
  font-weight: 600;
  border: none;
  padding: 6px 12px;

  border-radius: 50px;
  cursor: pointer;
  font-size: 13px;
  font-family: Roboto, sans-serif;
  letter-spacing: 0.2px;
  margin: 10px;

  &:hover {
    transform: scale(1.1);
  }
`;

const CircleWrapper = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  margin: 10px 0;
`;

const ProgressCircle = styled.svg`
  transform: rotate(0deg);
`;

const CircleText = styled.text`
  font-size: 12px;
  fill: ${({ color }) => color};
  text-anchor: middle;
  dominant-baseline: central;
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
    setError(value.length > maxLength ? "Your message is too long" : "");
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

  // Moved this INSIDE the component scope properly
  const renderProgressCircle = () => {
    const radius = 20;
    const circumference = 2 * Math.PI * radius;
    const progress = Math.min(charCount / maxLength, 1);
    const strokeDashoffset = circumference * (1 - progress);
    const strokeColor = charsLeft < 0 ? "#e63946" : "#7a7b7b";

    return (
      <CircleWrapper>
        <ProgressCircle width="50" height="50">
          <circle
            cx="25"
            cy="25"
            r={radius}
            stroke="#e6e6e6"
            strokeWidth="4"
            fill="none"
          />
          <circle
            cx="25"
            cy="25"
            r={radius}
            stroke={strokeColor}
            strokeWidth="4"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
          />
          <CircleText x="25" y="25" color={strokeColor}>
            {charCount}
          </CircleText>
        </ProgressCircle>
      </CircleWrapper>
    );
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

        <SubmitButtonContainer>
          <Button type="submit" disabled={inputValue.length === 0}>
            ❤️ Send Happy Thought ❤️
          </Button>
          <div>
            {renderProgressCircle()}
            {error && <p style={{ color: "#e63946", fontSize: "11px" }}>{error}</p>}
          </div>
        </SubmitButtonContainer>
      </form>
    </PostContainer>
  );
};
