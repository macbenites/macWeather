import styled from "styled-components";

export const HomeContainer = styled.div`
  background-color: var(--background-color);
  padding: 1rem 0;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  border-radius: 1rem;
  padding: 3rem 2rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    margin: 2rem 3rem;
    padding: 3rem 0;
  }
`;

export const Info = styled.div`
  h1 {
    color: var(--headline);
    margin: 0%;
  }
  p {
    color: var(--paragraph);
  }
  img {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    max-width: 40%;
  }
`;
export const DrawHome = styled.img`
  width: 100%;
  max-width: 1000px;
  max-height: 600px;
  @media screen and (min-width: 768px) {
    max-width: 40%;
  }
`;
