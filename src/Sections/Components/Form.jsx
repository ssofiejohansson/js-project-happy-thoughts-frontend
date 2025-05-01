import styled from "styled-components";
import { SubmitButton } from "./Submit";

export const Form = () => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> fab8659f6e1097bbd56965f0bbbb29a16b4a407e

  const TextArea = styled.textarea`
    width: 90%;
    height: 60px;
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
 

<<<<<<< HEAD
=======
  const FormContainer = styled.div``;
>>>>>>> 5fcdef672e57fbf060c741a786ea501bcc8cdd17
=======
>>>>>>> fab8659f6e1097bbd56965f0bbbb29a16b4a407e
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
