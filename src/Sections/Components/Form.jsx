import styled from 'styled-components';

export const FormWrapper = styled.form`
  background: #f48fb1;
  border-radius: 18px;
  border: 6px solid #f4511e;
  box-shadow: 0 4px 16px rgba(244, 81, 30, 0.12);
  padding: 2rem 2.5rem;
  max-width: 340px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
`;

export const Label = styled.label`
  font-weight: 600;
  color: #222;
  font-size: 1.1rem;
  width: 100%;
  display: block;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.6rem 1rem;
  margin: 0.4rem 0 1rem 0;
  border-radius: 10px;
  border: 1.5px solid #e0e0e0;
  font-size: 1rem;
  background: #f9f6ff;
  outline: none;
  transition: border 0.2s;
  &:focus {
    border-color: #222;
  }
`;

export const ErrorMsg = styled.div`
  margin-top: 0.5rem;
  color: #f357a8;
  font-weight: 600;
  font-size: 1rem;
  text-align: center;
`;

export const SubmitButton = styled.button`
  width: 100%;
  background: #f4511e;
  color: #fff;
  font-weight: 700;
  font-size: 1.1rem;
  border-radius: 10px;
  padding: 0.7rem 0;
  border: none;
  box-shadow: 0 2px 8px rgba(123, 47, 242, 0.08);
  cursor: pointer;
  transition: background 0.2s;
`;
