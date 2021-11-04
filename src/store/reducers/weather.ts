import { ADD_CITY_WEATHER, IAction, IWeatherState, SET_CITY } from '../store.module';

const defaultState: IWeatherState = {
  city: localStorage.getItem('city_weather') || 'Minsk',
  currentWeather: null,
  cityWeatherData: [],
};

export const weather = (state: IWeatherState = defaultState, action: IAction): IWeatherState => {
  switch (action.type) {
    case ADD_CITY_WEATHER:
      return {
        ...state,
        currentWeather: action.payload.current,
        cityWeatherData: action.payload.forecastday,
      };
    case SET_CITY:
      return {
        ...state,
        city: action.payload,
      };
    default:
      return state;
  }
};
