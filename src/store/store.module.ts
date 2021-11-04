export const KEY = '73c117397ee34c2ba48185321210311';
export const DOMEN = 'https://api.weatherapi.com/v1/';

export const ADD_CITY_WEATHER = 'ADD_CITY_WEATHER';
export const SET_CITY = 'SET_CITY';

export interface IWeatherState {
  city: string;
  currentWeather: IWeather | null;
  cityWeatherData: IForecastDay[];
}

export interface IAction {
  type: string;
  payload?: any;
}

export interface IReducer {
  weather: IWeatherState;
}

export interface IGetCityWeather {
  current: IWeather;
  forecastday: IForecastDay[];
}

export interface IWeather {
  temp_c: number; //Температура в градусах Цельсия
  feelslike_c: number; //По ощущениям температура в градусах Цельсия
  wind_kph: number; //Скорость ветра в километрах в час
  wind_degree: number; //Направление ветра в градусах
  humidity: number; //Влажность в процентах
  cloud: number; //Облачность в процентах
  time?: string;
}

export interface IForecastDay {
  date: string;
  hour: IWeather[];
}
