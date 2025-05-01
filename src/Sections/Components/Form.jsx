import React, { useState } from "react";
import styled from "styled-components";

export const Form = () => {
  const InputArea = styled.input`
    width: 90%;
    border: 2px solid #7a7b7b;
    padding: 10px;
    font-size: 16px;

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

  const TextInput = () => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  }
  return (
    <form>
      <InputArea type="input"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type your happy thought here..." />
      <SubmitButtonContainer>
        <Button>❤️ Send Happy Thought ❤️</Button>
      </SubmitButtonContainer>

    </form>
  );
};