import { useEffect, useState } from 'react';
import { Post, Title } from './Post';
import { View } from './View';
import { styled, keyframes } from 'styled-components';
import { useLocation } from 'react-router-dom';
import { Bubble } from '../Sections/Components/Bubble';
import { DotLottieWrapper } from '../Pages/Home';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Button } from '../Sections/Components/Button';
import { Link } from 'react-router-dom';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8081';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const SubHeading = styled.h2`
  font-size: clamp(1.2rem, 5vw, 20px);
  margin-bottom: 0px;
  padding: 10px;
`;

const Rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Hourglass = styled.div`
  font-size: 45px;
  animation: ${Rotate} 1.5s linear infinite;
`;

export const Thoughts = () => {
  const [happyThoughts, setHappyThoughts] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const accessToken = localStorage.getItem('accessToken');
  const [showBubble, setShowBubble] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`${API_URL}/thoughts`);
      .then((res) => res.json())
      .then((data) => {
        setHappyThoughts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch thoughts:', err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (location.state?.loginMessage) {
      setShowBubble(true);
    }
  }, [location.state]);

  const handleFormSubmit = (newThought) => {
    setHappyThoughts((prevThoughts) => [newThought, ...prevThoughts]);
  };

  const handleDeleteThought = (deletedId) => {
    setHappyThoughts((prev) => prev.filter((t) => t._id !== deletedId));
  };

  const currentUserId = localStorage.getItem('userId'); // Use userId instead of username

  return (
    <>
      <Container>
        <Title>This is Happy Thoughts ❤️</Title>

        {accessToken && (
          <Button as={Link} to='/logout'>
            Log out
          </Button>
        )}
        {accessToken && (
          <Button as={Link} to='/thoughts/likes'>
            My Likes
          </Button>
        )}

        <Post onSubmit={handleFormSubmit} />
        {loading ? (
          <Hourglass>⏳</Hourglass>
        ) : (
          <View
            thoughts={happyThoughts}
            setThoughts={setHappyThoughts}
            handleDeleteThought={handleDeleteThought}
            currentUserId={currentUserId}
          />
        )}

        <DotLottieWrapper>
          {showBubble && (
            <Bubble>
              {location.state?.loginMessage ? (
                location.state.loginMessage
              ) : (
                <>
                  Please <Link to='/login'>login</Link> or{' '}
                  <Link to='/register'>sign up</Link> to post a thought.
                </>
              )}
            </Bubble>
          )}
          <DotLottieReact
            src='https://lottie.host/5a7cb486-522b-4467-b656-356bea2585ff/MH7Oyw6zWd.lottie'
            loop
            autoplay
            style={{ maxWidth: '200px' }}
          />
        </DotLottieWrapper>
      </Container>
    </>
  );
};
