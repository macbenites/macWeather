import styled from "styled-components";

export const CityContainer = styled.div`
  border-radius: 1rem;
  width: 250px;
  height: auto;
  padding: 1.3rem 2rem;
  background-color: var(--background-color);
  margin: 2rem auto;
`;

export const WeatherInfo = styled.div`
  h2 {
    color: var(--headline);
  }
  color: var(--paragraph);
  img {
    width: 32px;
    height: 24px;
    border-radius: 5px;
  }

  strong {
    color: var(--headline);
  }
`;

export const HeadLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
