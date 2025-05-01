import { Post } from "./Post";
import { View } from "./View";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
  height: 100vh;
`;

export const AppContainer = () => {
  return (
    <Container>
      <h1>Happy Thoughts ❤️</h1>
      <Post />
      <View />
    </Container>
  );
}