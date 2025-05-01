import React, { useState } from "react";
import { Form } from "./Sections/Components/Form";
import { View } from "./Sections/View";
import { AppContainer } from "./Sections/Container";

export const App = () => {
  const [happyThought, setHappyThought] = useState(""); // State to store the submitted text

  const handleFormSubmit = (text) => {
    setHappyThought(text); // Update the state with the submitted text
  };

  return (
    <div>
      <Form onSubmit={handleFormSubmit} />
      <View happyThought={happyThought} />
      <AppContainer />
    </div>
  );
};
