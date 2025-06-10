import { PostContainer, Title, InputWrapper, InputArea, SubmitButtonContainer, Button } from "../Sections/Post"
import { Container } from "../Sections/Thoughts"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export const Home = () => {
  return (
    <>
      <p>Home page</p>
      <a href="/thoughts">See all thoughts</a>
      <Container>
        <DotLottieReact
          src='https://lottie.host/5a7cb486-522b-4467-b656-356bea2585ff/MH7Oyw6zWd.lottie'
          loop
          autoplay
          style={{ maxWidth: '350px' }}
        />
        <h1>Welcome to Happy Thoughts ❤️</h1>
        <Title> Log in</Title>
        <PostContainer>
          <InputWrapper>
            Username:
            <input></input>
            Password:
            <input></input>
          </InputWrapper>
          <SubmitButtonContainer><Button>Log in</Button></SubmitButtonContainer>
        </PostContainer>
      </Container >
    </>
  )
}