import styled from "styled-components";

export const Form = () => {

  const FormContainer = styled.div`
  `
  return (
    <FormContainer>
      <h2>Share your happy thought!</h2>
      <form>
        <textarea
          placeholder="What makes you happy?"
          maxLength="140"
        ></textarea>
        <button type="submit">Send Happy Thought</button>
      </form>
    </FormContainer>
  );
}
