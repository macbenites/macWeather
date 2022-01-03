export default async (path) => {
  const response = await fetch(path);
  const data = await response.json();

  return !!data.main
    ? {
        min: Math.round(data.main.temp_min),
        max: Math.round(data.main.temp_max),
        img: data.weather[0].icon,
        id: data.id,
        wind: data.wind.speed,
        temp: data.main.temp,
        name: data.name,
        weather: data.weather[0].main,
        description: data.weather[0].description,
        clouds: data.clouds.all,
        latitude: data.coord.lat,
        longitude: data.coord.lon,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        country: data.sys.country,
      }
    : null;
};
