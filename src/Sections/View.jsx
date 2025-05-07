import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TimeAgo from "./Components/TimeAgo";
import { LikeBtn } from "./Components/LikeBtn";

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

const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const ResetButton = styled.button`
  background-color: #fff;
  color: #e63946;
  font-weight: 600;
  border: 3px solid #fdafaf;
  padding: 10px 20px;
  border-radius: 50px;
  cursor: pointer;
  font-size: 12px;
  font-family: Roboto, sans-serif;
  letter-spacing: 0.2px;

  &:hover {
    transform: scale(1.1);
  }
`;

export const View = ({ onReset }) => {
  const [thoughts, setHappyThoughts] = useState([]);

  useEffect(() => {
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
      .then((res) => res.json())
      .then((data) => setHappyThoughts(data))
      .catch((err) => console.error("Failed to fetch thoughts:", err));
  }, []);

  return (
    <>
      {thoughts.length > 0 &&
        thoughts.map((thought) => (
          <ViewContainer key={thought._id}>
            <TextField>{thought.text}</TextField>

            <ActionsWrapper>
              <LikeBtn />
              <TimeAgo timestamp={thought.createdAt} />
            </ActionsWrapper>

            {/* Render the message */}
            <p>{thought.message}</p>
          </ViewContainer>
        ))}
      {thoughts.length > 0 && (
        <ResetButton onClick={() => setHappyThoughts([])}>
          💔 Clear All Thoughts 💔
        </ResetButton>
      )}
    </>
  );
};
