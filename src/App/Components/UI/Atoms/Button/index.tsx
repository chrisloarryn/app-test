import React from 'react';

import { Button as ButtonComponent } from './styles';

interface IButtonProps {
  name?: string;
  onClick?: (value: any) => any;
}

export const Button = ({
  name = 'Button',
  onClick = () => {}
}: IButtonProps): JSX.Element => {
  // onClick={() => setActive(mock)}
  return <ButtonComponent onClick={onClick}>{name}</ButtonComponent>;
};
