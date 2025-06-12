import styled from 'styled-components';

export const Bubble = styled.div`
  position: absolute;
  bottom: 100px;
  right: 24px;
  background: #f48fb1;
  color: #222;
  border-radius: 18px;
  padding: 18px;
  box-shadow: 0 4px 16px rgba(244, 81, 30, 0.12);
  min-width: 200px;
  max-width: 260px;
  text-align: center;
  z-index: 101;
  border: 4px solid #f4511e;
  letter-spacing: 0.5px;
  animation: pop-in 0.7s cubic-bezier(0.68, -0.55, 0.27, 1.55);

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    right: 34px;
    border-width: 10px 10px 0 10px;
    border-style: solid;
    border-color: #f48fb1 transparent transparent transparent;
    display: block;
    width: 0;
    filter: drop-shadow(0 1px 1px #f4511e);
  }

  @keyframes pop-in {
    0% {
      transform: scale(0.7) translateY(30px);
      opacity: 0;
    }
    80% {
      transform: scale(1.08) translateY(-8px);
      opacity: 1;
    }
    100% {
      transform: scale(1) translateY(0);
      opacity: 1;
    }
  }
`;
