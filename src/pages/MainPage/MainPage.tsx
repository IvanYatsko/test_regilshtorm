import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { Button, Weather } from '../../components';
import { IReducer } from '../../store/store.module';
import { IMainPage } from '../pages.module';
import './MainPage.scss';

export const MainPage: React.FC<IMainPage> = ({ handleClickCity }) => {
  const { city, cityWeatherData, currentWeather } = useSelector((state: IReducer) => state.weather);

  return (
    <div className='page-wrapper'>
      <div className='page-container'>
        <div className='page-section weather__button'>
          <Button text='Минск' handleClick={handleClickCity} />
          <Button text='Москва' handleClick={handleClickCity} />
          <Button text='Братислава' handleClick={handleClickCity} />
          <NavLink to={`/ather/${city}`} className=''>
            Перейти на другую страницу
          </NavLink>
        </div>
        {currentWeather && (
          <div className='page-section'>
            <h2>Текущая погода в {city}:</h2>
            <div className='weather'>
              <Weather weather={currentWeather} />
            </div>
          </div>
        )}
        {cityWeatherData && (
          <div className='page-section'>
            <h2>Погода на ближайшие 3 дня:</h2>
            <div className='weather__3days'>
              {cityWeatherData.map(({ date, hour }) => (
                <div className='weather' key={date}>
                  <h3 className='weather__title'>{date}</h3>
                  {hour.map((weather) => (
                    <div className='weather__hour' key={weather.time}>
                      <Weather weather={weather} time={weather.time?.split(' ')[1]} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
