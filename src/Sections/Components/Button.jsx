import styled from 'styled-components';

export const Button = styled.button`
  background-color: #f48fb1;
  border: 4px solid #f4511e;
  color: #222;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 16px;
  padding: 12px 28px;
  border-radius: 18px;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(244, 81, 30, 0.12);
  transition: background 0.2s, border-color 0.2s, color 0.2s, transform 0.1s;
  margin: 0;

  &:hover,
  &:focus {
    background-color: #f4511e;
    color: #fff;
    border-color: #f48fb1;
    transform: translateY(-2px) scale(1.03);
    outline: none;
  }

  &:active {
    transform: scale(0.98);
  }
`;
