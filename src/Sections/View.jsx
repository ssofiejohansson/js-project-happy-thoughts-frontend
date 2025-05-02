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
  margin-bottom: 20px; 

  @media (min-width: 768px) {
    max-width: 600px;
  }
`;

const TextField = styled.div`
  background-color: white;
  font-family: monospace;
  font-weight: 500;
  font-size: 16px;
  width: 100%;
  margin-bottom: 10px;
`;

export const LikeButton = styled.button`
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
    background-color: #fdafaf;
  }
`;

const ResetButton = styled.button`
  background-color: #fdafaf;
  color: #FFF;
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

export const View = ({ happyThoughts, onReset }) => {
  return (
    <>
      {happyThoughts.length > 0 ? (
        happyThoughts.map((thought, index) => (
          <ViewContainer key={index}>
            <TextField>{thought}</TextField>
            <LikeButton>❤️</LikeButton>
          </ViewContainer>
        ))
      ) : (
        <ViewContainer>
          <TextField>Your happy thoughts will appear here</TextField>
          <LikeButton>❤️</LikeButton>
        </ViewContainer>
      )}
      {happyThoughts.length > 0 && (
        <ResetButton onClick={onReset}>💔 Remove All Thoughts 💔</ResetButton>
      )}
    </>
  );
};
