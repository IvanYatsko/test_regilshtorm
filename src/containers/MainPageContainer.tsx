import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MainPage } from '../pages';
import { getWeather } from '../store/actions/apiActions/apiWeatherAsync';
import { setCity } from '../store/actions/weather';
import { IReducer } from '../store/store.module';

export const MainPageContainer: React.FC = () => {
  const { city } = useSelector((state: IReducer) => state.weather);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeather(city));
  }, [city]);

  const handleClickCity = (value: string) => {
    localStorage.setItem('city_weather', value);
    dispatch(setCity(value));
  };

  const props = {
    handleClickCity,
  };

  return <MainPage {...props} />;
};
