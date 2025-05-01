import styled from "styled-components";
import { SubmitButton } from "./Submit";

export const Form = () => {

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

  return (
    <form>
      <TextArea
        placeholder="React is making me happy!"
        maxLength="140"
      ></TextArea>
      <SubmitButton type="submit">Send Happy Thought</SubmitButton>

    </form>
  );
};
