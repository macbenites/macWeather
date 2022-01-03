import styled, { keyframes } from "styled-components";

export const AboutContainer = styled.div`
  background-color: var(--background-color);
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  margin: 2rem 2rem;
  padding: 2rem 2rem;
  min-width: 260px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    margin: 2rem 3rem;
    padding: 3rem 3rem;
  }
`;

const typing = keyframes`
  from {width :0}
`;

const blink = keyframes`
  50%{
    border-color: transparent;
  }
`;

export const Effect = styled.span`
  font-size: 2rem;
  font-family: monospace;
  font-weight: bold;
  color: var(--link-color);
  margin: 2rem 0;
  display: block;
  white-space: nowrap;
  border-right: 4px solid;
  width: 13ch;
  animation: ${typing} 2s steps(13), ${blink} 0.5s infinite step-end alternate;
  overflow: hidden;
`;
export const AboutMe = styled.div`
  strong {
    color: var(--tertiary);
  }
  p {
    color: var(--paragraph);
    font-size: 1.2rem;
  }

  @media (min-width: 768px) {
    max-width: 50%;
  }
`;
