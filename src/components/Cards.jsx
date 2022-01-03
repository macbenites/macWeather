import Card from "./Card.jsx";
import styled from "styled-components";
import Home from "./Home.jsx";

export default function Cards({ cities, onDelete }) {
  return (
    <CardsContainer>
      {cities.length > 0 ? (
        cities?.map((c) => (
          <Card
            id={c.id}
            key={c.id}
            humidity={c.humidity}
            pressure={c.pressure}
            name={c.name}
            img={c.img}
            max={c.max}
            wind={c.wind}
            min={c.min}
            description={c.description}
            onDelete={onDelete}
          />
        ))
      ) : (
        <Home />
      )}
    </CardsContainer>
  );
}

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin: 1rem 0;
  padding: 2rem;
  border-radius: 1rem;
`;
