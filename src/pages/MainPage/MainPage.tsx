import React from 'react';
import { useSelector } from 'react-redux';

import { Button } from '../../components/UI';
import { IReducer } from '../../store/store.module';
import { IMainPage } from '../pages.module';
import './MainPage.scss';

export const MainPage: React.FC<IMainPage> = ({ handleClickCity }) => {
  const { city, cityWeatherData, currentWeather } = useSelector((state: IReducer) => state.weather);
  if (!currentWeather) {
    return null;
  }
  const { temp_c, feelslike_c, cloud, humidity, wind_degree, wind_kph } = currentWeather!;

  return (
    <div className='page-wrapper'>
      <div className='page-container'>
        <div>
          <Button text='Минск' handleClick={handleClickCity} />
          <Button text='Москва' handleClick={handleClickCity} />
          <Button text='Братислава' handleClick={handleClickCity} />
        </div>
        {currentWeather && (
          <div>
            <h3>Текущая погода в {city}:</h3>
            <div>
              <p>Температура в градусах Цельсия: {temp_c}</p>
              <p>По ощущениям температура в градусах Цельсия: {feelslike_c}</p>
              <p>Скорость ветра в километрах в час: {wind_kph}</p>
              <p>Направление ветра в градусах: {wind_degree}</p>
              <p>Влажность в процентах: {humidity}</p>
              <p>Облачность в процентах: {cloud}</p>
            </div>
          </div>
        )}
        {cityWeatherData && (
          <div>
            <h3>Погода на ближайшие 3 дня:</h3>
            {cityWeatherData.map(({ date, hour }) =>
              hour.map(({ cloud, feelslike_c, humidity, time, wind_kph, wind_degree, temp_c }) => (
                <div key={time}>
                  <p>Температура в градусах Цельсия: {temp_c}</p>
                  <p>По ощущениям температура в градусах Цельсия: {feelslike_c}</p>
                  <p>Скорость ветра в километрах в час: {wind_kph}</p>
                  <p>Направление ветра в градусах: {wind_degree}</p>
                  <p>Влажность в процентах: {humidity}</p>
                  <p>Облачность в процентах: {cloud}</p>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};
