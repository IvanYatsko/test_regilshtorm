import { useParams, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { IReducer } from '../../store/store.module';
import { Button, Input, Weather } from '../../components';
import { IAtherPage, IParams } from '../pages.module';

export const AtherPage: React.FC<IAtherPage> = ({ setInputValue, value, handleClickCity }) => {
  const { cityWeatherData } = useSelector((state: IReducer) => state.weather);
  const params: IParams = useParams();

  return (
    <div className='page-wrapper'>
      <div className='page-container'>
        <h2>{params.city}</h2>
        <div>
          <Input type='text' placeholder='Введите город' value={value} setInputValue={setInputValue} />
          <Button text='Ввод' handleClick={handleClickCity} />
          <NavLink to={`/`} className=''>
            Перейти на главную страцу
          </NavLink>
        </div>
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
    </div>
  );
};
