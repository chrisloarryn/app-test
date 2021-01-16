import React, { useContext } from 'react';
import { AppStateContext } from '../../../Providers/AppState';
import { NoData } from '../NoData/styles';
import { Card, CardContent, Container, Img, Description } from './styles';

export const ActiveInsure = (): JSX.Element => {
  const { active: activeInsure } = useContext(AppStateContext);
  if (!activeInsure.name) return <NoData>No hay un plan seleccionado</NoData>;
  return (
    <Container>
      <h2>Card</h2>

      <Card>
        <Img src={activeInsure.image} alt='Avatar' style={{ width: '100%' }} />
        <CardContent>
          <h4>
            <b>{activeInsure.name}</b>
          </h4>
          <Description>{activeInsure.description}</Description>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <p style={{ color: 'tomato' }}>Precio:</p>
            <p style={{ color: 'tomato', marginLeft: '5px' }}>
              {activeInsure.price}
            </p>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};
