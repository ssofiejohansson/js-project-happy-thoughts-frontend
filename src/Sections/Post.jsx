import styled from "styled-components";
import { Form } from "./Components/Form";

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
`;

const Title = styled.h2`
  font-size: 16px;
  color: #000;
  font-weight: 500;
  font-family: Roboto, sans-serif;
  letter-spacing: 0.2px;
`;

export const Post = () => {
  return (
    <PostContainer>
      <Title>What's making you happy right now?</Title>
      <Form />
    </PostContainer>
  );
};
