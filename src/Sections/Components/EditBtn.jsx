import React from 'react';
import styled from 'styled-components';

const EditLink = styled.p`
  color: #222;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  transition: color 0.2s;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export const EditThought = ({ onEdit }) => (
  <EditLink
    onClick={onEdit}
    tabIndex={0}
    role='button'
    aria-label='Edit thought'
  >
    Edit thought
  </EditLink>
);
