import { Title, Button } from '../Sections/Post';
import { Container } from '../Sections/Thoughts';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useState } from 'react';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (data.success) {
        setMessage(`Login successful, ${username}! 🐮`);
        // Save token to localStorage or handle successful login
      } else {
        setMessage(data.message || 'Login failed');
      }
    } catch (err) {
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <>
      <Container>
        <DotLottieReact
          src='https://lottie.host/5a7cb486-522b-4467-b656-356bea2585ff/MH7Oyw6zWd.lottie'
          loop
          autoplay
          style={{ maxWidth: '350px' }}
        />

        <Title> Log in</Title>
        <div>
          <div>
            Username:
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            Password:
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <Button onClick={handleLogin}>Log in</Button>
          </div>
          {message && <div>{message}</div>}
        </div>
      </Container>
    </>
  );
};
