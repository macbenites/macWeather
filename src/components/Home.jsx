import homeDraw from "../img/homeDraw.svg";
import { HomeContainer, Info, DrawHome } from "../styles/Home.js";

export default function Home() {
  return (
    <HomeContainer>
      <Info>
        <h1>
          Find
          <br /> your weather
        </h1>
        <p>
          When you search for a city name in the <strong>WeatherApp</strong>,
          you will get a card with weather information. Also, by clicking on the
          name of the city you will be able to get much more information about
          the weather in the city. And remember that you can only search a
          maximum of 6 cities.
        </p>
      </Info>
      <DrawHome src={homeDraw} alt="weatherHome" />
    </HomeContainer>
  );
}
