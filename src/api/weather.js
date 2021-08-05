import {apiKey} from '../config';

const currentWeather = async ({city}) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
  );
  return await res.json();
};

export {currentWeather};
