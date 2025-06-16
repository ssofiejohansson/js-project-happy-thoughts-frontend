import { Title } from '../Sections/Post';
import { Container } from '../Sections/Thoughts';
import { useState } from 'react';
import {
  FormWrapper,
  Label,
  Input,
  ErrorMsg,
  SubmitButton,
} from '../Sections/Components/Form';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8081';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (data.success) {
        setMessage(`Hi, ${username} 🐮 Let's post some happy thoughts!`);
        setSuccess(true);
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('userId', data.id);
        navigate('/thoughts', {
          state: {
            loginMessage: `Hey ${username} 🐮 Let's post some happy thoughts!`,
          },
        });
      } else {
        setMessage(data.message || 'Login failed');
        setSuccess(false);
      }
    } catch (err) {
      setMessage('Something went wrong. Please try again.');
      setSuccess(false);
    }
  };

  return (
    <>
      <Container>
        <Title>Login to Happy Thoughts</Title>
        <p>
          Don't have an account? Sign up <Link to='/register'>here</Link>.
        </p>
        <FormWrapper onSubmit={handleLogin}>
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
              autoComplete='current-password'
            />
          </Label>
          <SubmitButton type='submit'>Log in</SubmitButton>
          {message && !success && <ErrorMsg>{message}</ErrorMsg>}
        </FormWrapper>
        <p>
          ← Go back to <Link to='/'>home</Link>.
        </p>
      </Container>
    </>
  );
};
