import { useState } from 'react';
import { Title } from '../Sections/Post';
import { Container } from '../Sections/Thoughts';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { DotLottieWrapper } from '../Pages/Home';
import { Bubble } from '../Sections/Components/Bubble';
import { useNavigate, Link } from 'react-router-dom';
import {
  FormWrapper,
  Label,
  Input,
  ErrorMsg,
  SubmitButton,
} from '../Sections/Components/Form';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8081';

export const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (data.success) {
        setMessage('Registration successful!');
        // Navigate to login with state after a short delay
        setTimeout(() => {
          navigate('/login', { state: { registered: true } });
        }, 3000);
      } else {
        setMessage(data.message || 'Registration failed');
      }
    } catch (err) {
      setMessage('Something went wrong. Try again.');
    }
  };

  return (
    <Container>
      <Title>Sign up to Happy Thoughts</Title>
      <p>
        Already have an account? Log in <Link to='/login'>here</Link>.
      </p>
      <FormWrapper onSubmit={handleRegister}>
        <Label>
          Username:
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete='username'
          />
        </Label>
        <Label>
          Password:
          <Input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete='new-password'
          />
        </Label>
        <SubmitButton type='submit'>Save</SubmitButton>
        {message && (
          <ErrorMsg
            style={{
              color: message.includes('successful') ? '#222' : '#fff',
            }}
          >
            {message}
          </ErrorMsg>
        )}
      </FormWrapper>
      <DotLottieWrapper>
        <Bubble>
          Yay! Let's sign you up so you can share some happy thoughts to the
          world! ❤️
        </Bubble>
        <DotLottieReact
          src='https://lottie.host/5a7cb486-522b-4467-b656-356bea2585ff/MH7Oyw6zWd.lottie'
          loop
          autoplay
          style={{ maxWidth: '200px' }}
        />
      </DotLottieWrapper>
      <p>
        ← Go back to <Link to='/'>home</Link>.
      </p>
    </Container>
  );
};
