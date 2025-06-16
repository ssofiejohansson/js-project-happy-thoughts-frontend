import React from 'react';
import styled from 'styled-components';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8081';

const DeleteButton = styled.button`
  position: absolute;
  top: 2px;
  right: 8px;
  background: none;
  border: none;
  font-size: 34px;
  cursor: pointer;
  color: #222;

  padding: 0;
  z-index: 2;
  transition: color 0.2s;

  &:hover,
  &:focus {
    color: #f4511e;
    outline: none;
  }
`;

export const DeleteBtn = ({ thoughtId, onDelete }) => {
  const handleDelete = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const response = await fetch(`${API_URL}/thoughts/${thoughtId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (!response.ok) {
        throw new Error('Failed to delete the thought');
      }
      onDelete(thoughtId);
    } catch (error) {
      console.error('Error deleting thought:', error);
    }
  };

  return (
    <DeleteButton onClick={handleDelete} aria-label='Delete thought'>
      ×
    </DeleteButton>
  );
};
