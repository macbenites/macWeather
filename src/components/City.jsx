import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import getCityById from "../services/getCityById";
import { CityContainer, WeatherInfo, HeadLine } from "../styles/City.js";

export default function City() {
  const [city, setCity] = useState([]);
  const { cityId } = useParams();

  useEffect(() => {
    getCityById(cityId, setCity);
  }, [cityId, setCity]);

  if (city.length === 0) {
    return null;
  }

  return (
    <CityContainer>
      <Helmet>
        <title>{city?.name} </title>
      </Helmet>
      {city && (
        <WeatherInfo>
          <HeadLine>
            <h2>{city?.name}</h2>
            <img
              src={`https://cdn.ipwhois.io/flags/${city?.country.toLowerCase()}.svg`}
              alt="flag"
            />
          </HeadLine>
          <br />
          <strong>Temperature :</strong> {Math.round(city?.temp || 0)} °C
          <br />
          <strong>Weather :</strong> {city?.weather}
          <br />
          <strong>Wind :</strong> {city?.wind} km/h
          <br />
          <strong>Amount of Clouds :</strong> {city?.clouds}
          <br />
          <strong>Latitude :</strong> {city?.latitude}º<br />
          <strong>Longitude :</strong> {city?.longitude}º<br />
          <br />
        </WeatherInfo>
      )}
    </CityContainer>
  );
}
