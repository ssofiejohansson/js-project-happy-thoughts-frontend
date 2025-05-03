import React, { useState } from "react";
import styled from "styled-components";

const LikeButton = styled.button`
  font-size: 24px;
  background-color: ${(props) => (props.liked ? "#fdafaf" : "#ebebeb")};
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

const LikeCount = styled.span`
  font-size: 15px;
  color: #7a7b7b;
  margin-left: 10px;
`;

const LikeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`;

export const LikeBtn = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLikeCount((prevCount) => prevCount + 1);
    setLiked(true);
  };

  return (
    <LikeContainer>
      <LikeButton onClick={handleLike} liked={liked}>
        ❤️
      </LikeButton>
      <LikeCount>x {likeCount}</LikeCount>
    </LikeContainer>
  );
};