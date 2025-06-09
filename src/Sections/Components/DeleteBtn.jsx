// DeleteBtn.js
import React from 'react';

export const DeleteBtn = ({ thoughtId, onDelete }) => {
  const handleDelete = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/thoughts/${thoughtId}`,
        {
          method: 'DELETE',
        }
      );
      if (!response.ok) {
        throw new Error('Failed to delete the thought');
      }
      onDelete(thoughtId); // Update the UI in parent component
    } catch (error) {
      console.error('Error deleting thought:', error);
    }
  };

  return (
    <button onClick={handleDelete} className='delete-button'>
      🗑️ Delete
    </button>
  );
};
