// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { Select } from './../../../FormElements/Select';
import { Title, Button } from '../../Atoms';
import { File } from '../../Organisms';

import { insurances } from './../../../../Constants';
import { Container } from '../../Templates';

export const Insurance = ({ name = '' }: { name?: string }) => {
  const dataMock = insurances.map((item: any) => item.insurance);
  return (
    <div>
      <File>
        <Title size='h2'>Here a title</Title>
      </File>
      <File>
        <Title size='h1'>
          {name !== '' ? 'Seleccionado' : 'NO Seleccionado'}
        </Title>
      </File>

      <File>
        <Container  align="flex-end">
          <Select iterators={dataMock} />

          <Button />
        </Container>
      </File>
    </div>
  );
};
