import React from 'react';
import { Select } from './../../../FormElements/Select';
import { Title, Button } from '../../Atoms';
import { File } from '../../Organisms';
import { Row, Col } from './../../Molecules';

import { insurances } from './../../../../Constants';

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
      <Row>
        <Col>
          <Select iterators={dataMock} />
        </Col>
        <Col>
          <Button />
        </Col>
      </Row>
    </div>
  );
};
