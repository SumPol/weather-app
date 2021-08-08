import {apiKey} from '../config';
import cityList from './mockups/cityList.json';

/** Получить данные о погоде в этом городе */
const currentWeather = async arg => {
  const city = arg.city;
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
  );
  return await res.json();
};

/** Получить отсортированный список городов */
const getCityList = arg => {
  const searchString = arg.searchString;
  let resultCity = cityList.filter(element => {
    return (
      element.city
        .toLowerCase()
        .replace(/\s+/g, '')
        .indexOf(searchString.toLowerCase().replace(/\s+/g, '')) === 0
    );
  });
  resultCity = resultCity.sort((city1, city2) => {
    if (city1.city > city2.city) {
      return 1;
    }
    if (city1.city < city2.city) {
      return -1;
    }
    if (city1.city === city2.city) {
      return 0;
    }
  });
  return resultCity;
};

export {currentWeather, getCityList};
