import styled, { keyframes } from "styled-components";
import { FaReact } from "react-icons/fa";

export const FootContent = styled.footer`
  margin-top: auto;
  color: var(--paragraph);
  background-color: var(--background-color);
  padding: 1rem 2rem;
`;
export const FooterLower = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  p {
    font-size: 0.8rem;
    font-weight: 200;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
    margin-top: 3rem;
  }
`;
export const Description = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;
  margin: 2rem 0;
  flex-direction: column;
  align-items: center;
  p {
    max-width: 80%;
  }
  @media (min-width: 768px) {
    max-width: 300px;
    margin: 2rem 0;
  }
`;

export const Contact = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--paragraph);
`;

export const LinkContact = styled.a`
  font-size: 2.3rem;
  margin: 0 1rem;
  color: var(--paragraph);
`;

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Rotate = styled(FaReact)`
  display: inline-block;
  animation: ${rotate} 3s linear infinite;
`;
