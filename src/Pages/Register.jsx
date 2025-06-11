import { useState } from 'react';
import { Title, Button } from '../Sections/Post';
import { Container } from '../Sections/Thoughts';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (username, password) => {
    try {
      const response = await fetch('http://localhost:8081/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (data.success) {
        setMessage('Registration successful!');
        // Optionally: Save token to localStorage, navigate to /login or /profile
      } else {
        setMessage(data.message || 'Registration failed');
      }
    } catch (err) {
      setMessage('Something went wrong. Try again.');
    }
  };

  return (
    <Container>
      <DotLottieReact
        src='https://lottie.host/5a7cb486-522b-4467-b656-356bea2585ff/MH7Oyw6zWd.lottie'
        loop
        autoplay
        style={{ maxWidth: '350px' }}
      />

      <Title>Register</Title>

      <div>
        <label>
          Username:
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <Button onClick={() => handleRegister(username, password)}>
          Register
        </Button>
        {message && <p>{message}</p>}
      </div>
    </Container>
  );
};
