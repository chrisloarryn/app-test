import React from 'react';

import { Button as ButtonComponent } from './styles';

export const Button = ({ name = 'Button' }) => {
  // onClick={() => setActive(mock)}
  return <ButtonComponent>{name}</ButtonComponent>;
};
