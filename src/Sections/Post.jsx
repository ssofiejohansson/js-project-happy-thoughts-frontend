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

export const Post = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const maxLength = 140;

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setError(value.length > maxLength ? "Your message is too long" : "");
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
        onSubmit(newThought); // Pass the new thought to the parent component
        setInputValue("");
        setError("");
      } catch (err) {
        setError("Something went wrong. Please try again.", err);
      }
    } else {
      setError("Message must be under 140 characters.");
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
        <SubmitButtonContainer>
          <Button type="submit" disabled={inputValue.length === 0}>
            ❤️ Send Happy Thought ❤️
          </Button>
          {error && (
            <p style={{ color: "#e63946", fontSize: "11px" }}>{error}</p>
          )}
        </SubmitButtonContainer>
      </form>
    </PostContainer>
  );
};
