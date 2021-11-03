import { Dispatch } from 'react';
import { DOMEN, IAction, KEY } from '../../store.module';
import { getCityWeather } from '../weather';

export function getWeather(
  city: string,
  days: number = 10
): (dispatch: Dispatch<IAction>) => Promise<void> {
  return async function (dispatch: Dispatch<IAction>) {
    const response = await fetch(
      `${DOMEN}forecast.json?q=${city}&days=${days}&aqi=no&alerts=no&key=${KEY}`
    );
    const { forecast, current } = await response.json();
    dispatch(getCityWeather({ current, forecastday: forecast.forecastday }));
  };
}
