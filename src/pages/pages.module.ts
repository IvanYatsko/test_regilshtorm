export interface IMainPage {
  handleClickCity: (city: string) => void;
}

export interface IParams {
  city: string;
}
export interface IAtherPage {
  setInputValue: (value: string) => void;
  value: string;
  handleClickCity: (value: string) => void;
}
