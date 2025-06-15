import { useEffect, useState } from 'react';
// import { View } from '../Sections/View';
import { Container } from '../Sections/Thoughts';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Bubble } from '../Sections/Components/Bubble';
import { Button } from '../Sections/Components/Button';
import { Title } from '../Sections/Post';

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const DotLottieWrapper = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    position: fixed;
    bottom: 24px;
    right: 24px;
    z-index: 100;
  }
`;

export const Home = () => {
  const [happyThoughts, setHappyThoughts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:8081/thoughts')
      .then((res) => res.json())
      .then((data) => {
        setHappyThoughts(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  return (
    <Container>
      <Title>✨ Welcome to Happy Thoughts ✨</Title>
      <p>Trying to make the world a better place, one thought at a time.</p>
      <ButtonContainer>
        <Button as={Link} to='/login'>
          Login
        </Button>
        <Button as={Link} to='/register'>
          Sign up
        </Button>
      </ButtonContainer>

      <DotLottieWrapper>
        <Bubble>
          Hi there! You have to be logged in to see our happy thoughts. Please{' '}
          <Link to='/login'>login</Link> or <Link to='/register'>sign up</Link>{' '}
          ❤️
        </Bubble>
        <DotLottieReact
          src='https://lottie.host/5a7cb486-522b-4467-b656-356bea2585ff/MH7Oyw6zWd.lottie'
          loop
          autoplay
          style={{ maxWidth: '200px' }}
        />
      </DotLottieWrapper>
    </Container>
  );
};
