import React, { useEffect, useState } from "react";
import { Post } from "./Post";
import { View } from "./View";
import styled from "styled-components";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 30px;
`;

const BaseHeading = styled.h1`
  color: rgb(42, 42, 42);
  text-align: center;
  font-weight: 500;
  font-family: Monospace, monospace;
  letter-spacing: 0.2px;
`;

const Heading = styled(BaseHeading)`
  font-size: 22px;
`;

const SubHeading = styled(BaseHeading)`
  font-size: 15px;
`;

const RedText = styled.span`
  color: #e63946;
`;

export const Thoughts = () => {
  const [happyThoughts, setHappyThoughts] = useState([]);

  useEffect(() => {
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
      .then((res) => res.json())
      .then((data) => setHappyThoughts(data))
      .catch((err) => console.error("Failed to fetch thoughts:", err));
  }, []);

  const handleFormSubmit = (newThought) => {
    setHappyThoughts((prevThoughts) => [newThought, ...prevThoughts]);
  };

  return (
    <Container>
      <DotLottieReact
        src="https://lottie.host/5a7cb486-522b-4467-b656-356bea2585ff/MH7Oyw6zWd.lottie"
        loop
        autoplay
        style={{ maxWidth: "450px" }}
      />
      <Heading>Welcome to Happy Thoughts ❤️</Heading>
      <SubHeading>
        Trying to make the world a better place,{" "}
        <RedText>one thought at a time.</RedText>
      </SubHeading>
      <Post onSubmit={handleFormSubmit} />
      <View thoughts={happyThoughts} />
    </Container>
  );
};
