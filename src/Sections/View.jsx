import styled from "styled-components";

const ViewContainer = styled.div`
  position: relative; /* Needed for absolute positioning of LikeButton */
  background-color: white;
  width: 600px;
  height: 200px;
  border: 1px solid;
  padding: 20px;
  box-shadow: 6px 6px 0px 0px black;
`;

const TextField = styled.div`
  background-color: white;
  font-family: monospace;
  font-weight: 500;
  font-size: 18px;
  width: 100%;
  height: 25%;
  align-self: top;
`;

const LikeButton = styled.button`
  position: absolute; /* Absolute to position it inside ViewContainer */
  font-size: 28px;
  bottom: 10px;
  left: 10px;
  background-color: #ebebeb;
  width: 55px;
  height: 55px;
  border: none;
  border-radius: 50%;
`;

const LikeCount = styled.div``;

export const View = () => {
  return (
    <ViewContainer>
      <TextField>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
        consequuntur deleniti dolor sed dolorum! Suscipit iusto beatae voluptate
        fugiat illum.
      </TextField>
      <LikeButton>❤️</LikeButton>
    </ViewContainer>
  );
};
