import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8081';

export const PostContainer = styled.div`
  background-color: #f48fb1;
  border: 6px solid #f4511e;
  padding: 22px 18px;
  width: 100%;
  max-width: 700px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
  border-radius: 24px;
`;

export const Title = styled.h1`
  font-size: clamp(2rem, 6vw, 52px);
  letter-spacing: 1px;
  @media (max-width: 767px) {
    text-align: center;
    width: 100%;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: nowrap;
  width: 100%;
  position: relative;
  gap: 12px;
  flex-direction: row;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
  }
`;

const CircleWrapper = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  margin: 5px;
`;

const ProgressCircle = styled.svg`
  transform: rotate(0deg);
`;

export const InputArea = styled.textarea`
  width: 90%;
  max-width: 90%;
  min-width: 0;
  border: 2px solid #7a7b7b;
  padding: 10px;
  font-size: 16px;
  resize: none;
  border-radius: 8px;

  &:focus {
    outline: none;
    color: #000;
    border-color: #7a7b7b;
    box-shadow: 0 0 5px #7a7b7b;
  }
  &::placeholder {
    font-size: 12px;
  }

  @media (max-width: 600px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const SubmitButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`;

export const Button = styled.button`
  background-color: #fdafaf;
  color: #000;
  font-weight: 600;
  border: none;
  padding: 7px 14px;
  border-radius: 50px;
  cursor: pointer;
  font-size: 13px;
  font-family: Roboto, sans-serif;
  letter-spacing: 0.2px;
  margin: 10px 5px 5px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
  &:disabled {
    background-color: rgba(253, 175, 175, 0.47);
    cursor: default;
  }
  &:hover {
    transform: scale(1);
  }
`;

const PostAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 0;
  }
    50% {
    transform: scale(1.5);
    opacity: 1;
    }
  100% {
    transform: scale(2); 
    opacity: 0;
  }
`;

const PostAnimationContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 1000;
`;

const Animation = styled.span`
  font-size: 45px;
  animation: ${PostAnimation} 3s ease-out forwards;
`;

export const Post = ({ onSubmit }) => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [showAnimation, setShowAnimation] = useState(false);

  const maxLength = 140;
  const charCount = message.length;
  const charsLeft = maxLength - charCount;

  const handleInputChange = (event) => {
    const value = event.target.value;
    setMessage(value);
    setError(value.length > maxLength ? 'Your thought is too long.' : '');
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (message.trim() && message.length >= 5 && message.length <= maxLength) {
      try {
        const response = await fetch(`${API_URL}/thoughts`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
          body: JSON.stringify({ message }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          setError(errorData.message || 'Failed to post your thought.');
          return;
        }

        const newThought = await response.json();
        onSubmit(newThought);
        setMessage('');
        setError('');

        // When submitting - show animation for 3 seconds
        setShowAnimation(true);
        setTimeout(() => setShowAnimation(false), 3000);
      } catch (err) {
        setError('Something went wrong. Please try again.');
        console.error(err);
      }
    } else {
      setError('Your thought must be between 5 and 140 characters.');
    }
  };

  const renderProgressCircle = () => {
    const radius = 20;
    const circumference = 2 * Math.PI * radius;
    const progress = Math.min(charCount / maxLength, 1);
    const strokeDashoffset = circumference * (1 - progress);
    const strokeColor = charsLeft < 0 ? '#e63946' : '#7a7b7b';

    return (
      <CircleWrapper>
        <ProgressCircle width='50' height='50'>
          <circle
            cx='25'
            cy='25'
            r={radius}
            stroke='#e6e6e6'
            strokeWidth='4'
            fill='none'
          />
          <circle
            cx='25'
            cy='25'
            r={radius}
            stroke={strokeColor}
            strokeWidth='4'
            fill='none'
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
          />
          <text
            x='25'
            y='25'
            fill={strokeColor}
            fontSize='12'
            textAnchor='middle'
            dominantBaseline='middle'
          >
            {charCount}
          </text>
        </ProgressCircle>
      </CircleWrapper>
    );
  };

  return (
    <PostContainer>
      <h2>What's making you happy right now?</h2>
      <form onSubmit={handleSubmit}>
        <InputWrapper>
          <InputArea
            value={message}
            onChange={handleInputChange}
            placeholder='Your thought must be at least 5 characters'
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                if (message.length >= 5 && message.length <= maxLength) {
                  handleSubmit(e);
                }
              }
            }}
          />
          {renderProgressCircle()}
        </InputWrapper>
        <SubmitButtonContainer>
          <Button type='submit' disabled={message.length < 5}>
            ❤️ Send Happy Thought ❤️
          </Button>
          {error && (
            <p style={{ color: '#e63946', fontSize: '11px' }}>{error}</p>
          )}
        </SubmitButtonContainer>
      </form>
      {showAnimation && (
        <PostAnimationContainer>
          <Animation>❤️</Animation>
        </PostAnimationContainer>
      )}
    </PostContainer>
  );
};
