import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8081';

const LikeButton = styled.button`
  font-size: 24px;
  background-color: none;
  width: 50px;
  height: 50px;
  border: none;
  padding: 10px;
  margin-top: 10px;
  border-radius: 50%;
  align-self: flex-start;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover span {
    transform: scale(1.2);
    transform-origin: center;
  }
`;

const Heart = styled.span`
  display: inline-block;
  transform-origin: center;
`;

const LikeCount = styled.span`
  font-size: 15px;
  margin-left: 10px;
`;

const LikeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`;

// In LikeBtn.js
export const LikeBtn = ({ thoughtId, hearts, onLike }) => {
  const [likeCount, setLikeCount] = useState(hearts);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    setLikeCount(hearts);
  }, [hearts]);

  useEffect(() => {
    const likedThoughts = JSON.parse(
      localStorage.getItem('likedThoughts') || '[]'
    );
    setLiked(likedThoughts.includes(thoughtId));
  }, [thoughtId]);

  const handleLike = async () => {
    if (liked) return;

    const likedThoughts = JSON.parse(
      localStorage.getItem('likedThoughts') || '[]'
    );
    try {
      const accessToken = localStorage.getItem('accessToken');
      const response = await fetch(`${API_URL}/thoughts/${thoughtId}/like`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (response.ok) {
        const updatedThought = await response.json();
        setLikeCount(updatedThought.hearts);
        setLiked(true);
        localStorage.setItem(
          'likedThoughts',
          JSON.stringify([...likedThoughts, thoughtId])
        );
        if (onLike) onLike(updatedThought); // Notify parent
      }
    } catch (error) {
      console.error('Error liking the thought:', error);
    }
  };

  return (
    <LikeContainer>
      <LikeButton onClick={handleLike} $liked={liked}>
        <Heart>❤️</Heart>
      </LikeButton>
      <LikeCount>x {likeCount}</LikeCount>
    </LikeContainer>
  );
};
