export enum EButtonType {
  submit = 'submit',
  button = 'button',
}

export interface IButton {
  text: string;
  handleClick: (city: string) => void;
  isDisabled?: boolean;
  type?: EButtonType;
}
