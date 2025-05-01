import styled from "styled-components";

const ViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: white;
  width: 80vw;
  box-sizing: border-box;
  outline: 2px solid #000;
  padding: 20px;
  box-shadow: 6px 6px 0px 0px black;
`;

const TextField = styled.div`
  background-color: white;
  font-family: monospace;
  font-weight: 500;
  font-size: 16px;
  width: 100%;
`;

const LikeButton = styled.button`
  font-size: 24px;
  background-color: #ebebeb;
  width: 50px;
  height: 50px;
  border: none;
  margin-top: 10px;
  border-radius: 50%;
  align-self: flex-start;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

export const View = () => {
  return (
    <ViewContainer>
      <TextField>Your happy thought will appear here...</TextField>
      <LikeButton>❤️</LikeButton>
    </ViewContainer>
  );
};
