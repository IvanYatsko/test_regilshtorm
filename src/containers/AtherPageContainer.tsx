import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import { AtherPage } from '../pages';
import { IParams } from '../pages/pages.module';
import { getWeather } from '../store/actions/apiActions/apiWeatherAsync';

export const AtherPageContainer: React.FC = () => {
  const dispatch = useDispatch();
  const { city }: IParams = useParams();
  const history = useHistory();

  const [value, setInputValue] = useState('');

  useEffect(() => {
    dispatch(getWeather(city));
  }, []);

  const handleClickCity = () => {
    history.push(`/ather/${value}`);
  };

  const props = {
    setInputValue,
    value,
    handleClickCity,
  };

  return <AtherPage {...props} />;
};
