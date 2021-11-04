import { IWeatherComponent } from '../component.module';

export const Weather: React.FC<IWeatherComponent> = ({ weather, time }) => {
  const { temp_c, feelslike_c, cloud, humidity, wind_degree, wind_kph } = weather;

  return (
    <>
      {time && <h4>{time}</h4>}
      <h5>Температура: {temp_c} °C</h5>
      <p>По ощущениям температура: {feelslike_c} °C</p>
      <p>Скорость ветра: {wind_kph} км/ч</p>
      <p>Направление ветра в градусах: {wind_degree}°</p>
      <p>Влажность: {humidity}%</p>
      <p>Облачность: {cloud}%</p>
    </>
  );
};
