import React from 'react';

import { Row as RowComponent } from './styles';

export const Row = ({ children }: { children: any }): JSX.Element => {
  return <RowComponent>{children}</RowComponent>;
};
