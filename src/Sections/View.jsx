import React, { useState } from 'react';
import styled from 'styled-components';
import { TimeAgo } from './Components/TimeAgo';
import { LikeBtn } from './Components/LikeBtn';
import { DeleteBtn } from './Components/DeleteBtn';
import { Input } from './Components/Form';
import { Button } from '../Sections/Post';
import { EditThought } from './Components/EditBtn';
import { Link } from 'react-router-dom';
import { Button as StyledButton } from './Components/Button';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8081';

export const ViewContainer = styled.div`
  background-color: #f48fb1;
  border: 6px solid #f4511e;
  padding: 32px;
  width: 100%;
  max-width: 700px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  border-radius: 24px;
`;

export const TextField = styled.div`
  width: 100%;
  margin-bottom: 10px;
  word-break: break-word;
  overflow-wrap: break-word;
`;

const ActionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

const ActionsColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
`;

export const View = ({
  thoughts,
  setThoughts,
  handleDeleteThought,
  currentUserId,
}) => {
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState('');

  const handleLike = (updatedThought) => {
    setThoughts((prevThoughts) =>
      prevThoughts.map((thought) =>
        thought._id === updatedThought._id ? updatedThought : thought
      )
    );
  };

  const handleSave = (thought) => {
    if (!editValue.trim()) {
      alert('Thought cannot be empty');
      return;
    }
    saveEdit(thought._id, editValue);
    setEditingId(null);
  };

  const saveEdit = async (_id, updatedText) => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const response = await fetch(`${API_URL}/thoughts/${_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ message: updatedText }),
      });

      if (!response.ok) {
        const data = await response.json();
        alert(data.error || 'Failed to save edit');
        return;
      }

      const data = await response.json();

      setThoughts((prevThoughts) =>
        prevThoughts.map((thought) =>
          thought._id === _id
            ? { ...thought, message: data.thought.message }
            : thought
        )
      );
    } catch (error) {
      console.error(error);
      alert('Error saving edit');
    }
  };

  return (
    <>
      {thoughts.length > 0 &&
        thoughts.map((thought) => (
          <ViewContainer key={thought._id}>
            <TextField>
              {editingId === thought._id ? (
                <>
                  <Input
                    type='text'
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleSave(thought);
                      }
                    }}
                  />
                  <Button onClick={() => handleSave(thought)}>Save</Button>
                </>
              ) : (
                thought.message
              )}
            </TextField>
            <ActionsWrapper>
              <LikeBtn
                thoughtId={thought._id}
                hearts={thought.hearts}
                onLike={handleLike}
              />

              {thought.userId === currentUserId && (
                <DeleteBtn
                  thoughtId={thought._id}
                  onDelete={handleDeleteThought}
                />
              )}

              <ActionsColumn>
                <p>Posted by: {thought.username}</p>
                <TimeAgo timestamp={thought.createdAt} />

                {thought.userId === currentUserId && (
                  <EditThought
                    onEdit={() => {
                      setEditingId(thought._id);
                      setEditValue(thought.message);
                    }}
                  />
                )}
              </ActionsColumn>
            </ActionsWrapper>
          </ViewContainer>
        ))}
    </>
  );
};
