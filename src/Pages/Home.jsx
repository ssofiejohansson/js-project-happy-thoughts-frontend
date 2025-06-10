import { Title, Button } from "../Sections/Post"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export const Home = () => {
  return (
    <>
      <p>Home page</p>
      <a href="/thoughts">See all thoughts</a>
      <div>
        <DotLottieReact
          src='https://lottie.host/5a7cb486-522b-4467-b656-356bea2585ff/MH7Oyw6zWd.lottie'
          loop
          autoplay
          style={{ maxWidth: '350px' }}
        />
        <h1>Welcome to Happy Thoughts ❤️</h1>
        <Title> Log in</Title>
        <div>
          <div>
            Username:
            <input></input>
            Password:
            <input></input>
          </div>
          <div><Button>Log in</Button></div>
        </div>
      </div >
    </>
  )
}