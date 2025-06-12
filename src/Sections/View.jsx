import styled from 'styled-components';
import { TimeAgo } from './Components/TimeAgo';
import { LikeBtn } from './Components/LikeBtn';
import { DeleteBtn } from './Components/DeleteBtn';

const ViewContainer = styled.div`
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

const TextField = styled.div`
  font-family: 'inter', sans-serif;
  font-weight: 500;
  font-size: 14px;
  width: 100%;
  margin-bottom: 10px;
`;

const ActionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const View = ({ thoughts, onLike, handleDeleteThought }) => {
  return (
    <>
      {thoughts.length > 0 &&
        thoughts.map((thought) => (
          <ViewContainer key={thought._id}>
            <TextField>{thought.message}</TextField>
            <ActionsWrapper>
              <LikeBtn
                thoughtId={thought._id}
                hearts={thought.hearts}
                onLike={onLike}
              />
              <DeleteBtn
                thoughtId={thought._id}
                onDelete={handleDeleteThought}
              />{' '}
              <div>
              <p>Posted by: {thought.username}</p>
              <TimeAgo timestamp={thought.createdAt} />
              </div>
            </ActionsWrapper>
          </ViewContainer>
        ))}
    </>
  );
};
