import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Remove the correct auth keys
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userId');
    navigate('/');
  }, [navigate]);

  return null;
};
