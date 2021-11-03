import { ADD_CITY_WEATHER, IGetCityWeather, SET_CITY } from '../store.module';

export function getCityWeather(weather: IGetCityWeather) {
  return { type: ADD_CITY_WEATHER, payload: weather };
}

export function setCity(city: string) {
  return { type: SET_CITY, payload: city };
}
