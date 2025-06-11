import { Title, Button } from "../Sections/Post"
import { Container } from "../Sections/Thoughts"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export const Register = () => {
  return (
    <>

      <Container>
        <DotLottieReact
          src='https://lottie.host/5a7cb486-522b-4467-b656-356bea2585ff/MH7Oyw6zWd.lottie'
          loop
          autoplay
          style={{ maxWidth: '350px' }}
        />

        <Title> Register</Title>
        <div>
          <div>
            Username:
            <input></input>
            Password:
            <input></input>
          </div>
          <div><Button>Log in</Button></div>
        </div>
      </Container >
    </>
  )
}