import toast from "react-hot-toast";
import api from "./api";

const API_KEY = process.env.REACT_APP_API;

export default async (id, setCities) => {
  api(
    `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${API_KEY}&units=metric`
  ).then((city) => {
    city
      ? (setCities(city), toast.success("City ​​found successfully"))
      : (setCities(null), toast.error("City not found"));
  });
};
