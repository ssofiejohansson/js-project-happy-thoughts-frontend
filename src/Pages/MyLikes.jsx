import React, { useEffect, useState } from 'react';
import { Container, SubHeading } from '../Sections/Thoughts';
import { View } from '../Sections/View'; // <-- Use the shared View
import { Button } from '../Sections/Components/Button';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { ViewContainer, TextField } from '../Sections/View'; // Import the ViewContainer for styling

// Spinner animation from Thoughts.jsx
const Rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Hourglass = styled.div`
  font-size: 45px;
  animation: ${Rotate} 1.5s linear infinite;
`;

export const MyLikes = () => {
  const [likedThoughts, setLikedThoughts] = useState([]);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    console.log('Access token:', accessToken);

    if (!accessToken) {
      console.error('No access token found');
      return;
    }

    fetch('http://localhost:8081/thoughts/likes', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`, // ✅ must be this format
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        console.log('Liked thoughts:', data);
        setLikedThoughts(data);
      })
      .catch((err) => {
        console.error('Fetch error:', err);
      });
  }, []);

  return (
    <Container>
      <h2>My Liked Thoughts</h2>
      <Link to='/thoughts'>
        <Button style={{ marginBottom: '20px' }}>Go back</Button>
      </Link>
      {likedThoughts.map((thought) => (
        <ViewContainer key={thought._id}>
          <TextField>{thought.message}</TextField>
        </ViewContainer>
      ))}
    </Container>
  );
};
