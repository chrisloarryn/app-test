import React from 'react';

import { Container as ContainerComponent } from './styles';

interface IContainerProps {
  children?: any;
  align?: 'flex-start' | 'center' | 'flex-end';
  style?: React.CSSProperties;
  direction?:
    | 'row'
    | 'column'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'row-reverse'
    | 'column-reverse';
}

export const Container = ({
  children,
  align = 'flex-end',
  style = {},
  direction = 'column'
}: IContainerProps) => (
  <ContainerComponent align={align} direction={direction} style={style}>
    {children}
  </ContainerComponent>
);
