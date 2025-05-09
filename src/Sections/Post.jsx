import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  padding: 20px;
  background-color: #f2f0f0;
  outline: 2px solid #000;
  box-shadow: 8px 8px 0px #000;
  width: 90vw;
  margin-bottom: 20px;
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

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; 
  width: 100%;
  position: relative;
`;

const CircleWrapper = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  margin: 5px;
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

const StarAnimation = keyframes`
  0%, 100% {
    opacity: 0;
  }
  25%, 75% {
    opacity: 0.5;
  }
     50% {
    opacity: 1;
  }
`;

const StarContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
`;

const Star = styled.span`
  font-size: 54px;
  animation: ${StarAnimation} 3s ease-out forwards;
`;

export const Post = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [showStars, setShowStars] = useState(false);

  const maxLength = 140;
  const charCount = inputValue.length;
  const charsLeft = maxLength - charCount;


  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setError(value.length > maxLength ? "Your thought is too long." : "");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      inputValue.trim() &&
      inputValue.length >= 1 &&
      inputValue.length <= maxLength
    ) {
      try {
        const response = await fetch(
          "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: inputValue }),
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          setError(errorData.message || "Failed to post your thought.");
          return;
        }

        const newThought = await response.json();
        onSubmit(newThought);
        setInputValue("");
        setError("");

        // When submitting - show star for 3 seconds
        setShowStars(true);
        setTimeout(() => setShowStars(false), 3000);
      } catch (err) {
        setError("Something went wrong. Please try again.", err);
      }
    } else {
      setError("Your thought must be less than 140 characters.");
    }
  };

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
        <InputWrapper>
          <InputArea
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Type your happy thought here"
          />
          {renderProgressCircle()}
        </InputWrapper>
        <SubmitButtonContainer>
          <Button type="submit" disabled={inputValue.length === 0}>
            ❤️ Send Happy Thought ❤️
          </Button>
          {error && (
            <p style={{ color: "#e63946", fontSize: "11px" }}>{error}</p>
          )}
        </SubmitButtonContainer>
      </form>
      {showStars && (
        <StarContainer>
          <Star>✨</Star>
        </StarContainer>
      )}
    </PostContainer>
  );
};
