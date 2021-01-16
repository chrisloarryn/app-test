import React from 'react';

import { H1, H2, H3, H4 } from './styles';

interface ITitleProps {
  size?: 'h1' | 'h2' | 'h3' | 'h4'
  children?: any
}

const TitleContainer = ({ children, size }: any) => {
  switch (size) {
    case 'h1':
      return <H1>{children}</H1>;
    case 'h2':
      return <H2>{children}</H2>;
    case 'h3':
      return <H3>{children}</H3>;
    case 'h4':
      return <H4>{children}</H4>;
    default:
      return <H1>{children}</H1>;
  }
};

export const Title = ({ size = 'h1', children }: ITitleProps) => {
  return <TitleContainer size={size}>{children}</TitleContainer>;
};
