import humidityIcon from "../img/humidity.svg";
import windIcon from "../img/wind.svg";
import pressureIcon from "../img/pressure.svg";
import close from "../img/close.svg";
import {
  CardContent,
  ButtonClose,
  CardLink,
  CardMiddle,
  FontTemp,
  CardInfo,
  InfoContainer,
} from "../styles/Card.js";

export default function Card({
  humidity,
  pressure,
  name,
  img,
  id,
  max,
  min,
  wind,
  description,
  onDelete,
}) {
  const infoWeather = [
    { unit: wind, metric: "m/s" },
    { unit: humidity, metric: "%" },
    { unit: pressure, metric: "hPa" },
  ];
  return (
    <CardContent color={img}>
      <ButtonClose src={close} onClick={() => onDelete(id)} />
      <CardLink to={`/city/${id}`}>{name}</CardLink>
      <CardMiddle>
        <img
          className="iconoClima"
          src={"http://openweathermap.org/img/wn/" + img + "@2x.png"}
          width="90"
          height="90"
          alt="Icon Weather"
        />
        <FontTemp>
          {max} <span>/ {min} °C</span>
          <br />
          <p>{description}</p>
        </FontTemp>
      </CardMiddle>
      <CardInfo>
        {infoWeather.map((e, index) => (
          <InfoContainer key={index}>
            <img
              src={
                index === 0
                  ? windIcon
                  : index === 1
                  ? humidityIcon
                  : pressureIcon
              }
              alt="Icon Weather"
            />
            <p>
              {e.unit} {e.metric}
            </p>
          </InfoContainer>
        ))}
      </CardInfo>
    </CardContent>
  );
}
