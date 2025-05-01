import styled from "styled-components";

export const SubmitButton = () => {
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

  return (
    <SubmitButtonContainer>
      <Button type="submit">❤️ Send Happy Thought ❤️</Button>
    </SubmitButtonContainer>
  );
}