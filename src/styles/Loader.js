import styled, { keyframes } from "styled-components";

export const Load = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  border: 8px solid var(--background-color);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border-left-color: var(--link-color);

  animation: ${spin} 1s linear infinite;
`;
