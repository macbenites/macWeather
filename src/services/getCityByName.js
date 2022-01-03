import api from "./api";
import toast from "react-hot-toast";

const API_KEY = process.env.REACT_APP_API;

export default function fetchCity(nameCity, setCities) {
  api(
    `https://api.openweathermap.org/data/2.5/weather?q=${nameCity}&appid=${API_KEY}&units=metric`
  ).then((city) => {
    city
      ? setCities(
          (oldCities) => [...oldCities, city],
          toast.success("City added to the list")
        )
      : toast.error("City not found");
  });
}
