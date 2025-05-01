import React, { useState } from "react";
import styled from "styled-components";
import { SubmitButton } from "./Submit";

export const Form = ({ onSubmit }) => {
  const [text, setText] = useState(""); // Local state to manage the textarea input

  const TextArea = styled.textarea`
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onSubmit(text); // Pass the text to the parent component
      setText(""); // Clear the textarea
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextArea
        placeholder="Type your happy thought here..."
        maxLength="140"
        value={text}
        onChange={(e) => setText(e.target.value)} // Update local state on input change
      ></TextArea>
      <SubmitButton type="submit">Send Happy Thought</SubmitButton>
    </form>
  );
};
