import { IWeather } from '../store/store.module';

export interface IWeatherComponent {
  weather: IWeather;
  time?: string | undefined;
}
