// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx, css } from '@emotion/react'

import { useContext } from 'react';
import { AppStateContext } from './../../../../Providers/AppState';
import { Paragraph, Img, Title, NoData } from './../../Atoms'
import { Container, Card, CardInfo } from './../../Templates'

export const InsuranceCard = (): JSX.Element => {
  const { active: activeInsure } = useContext(AppStateContext);
  if (!activeInsure.name) return <NoData css={
    css`
      display: flex;
      justify-content: center;
    `
  }>No hay un plan seleccionado</NoData>;
  return (
    <Container>
      <Title size="h2">Card</Title>

      <Card>
        <Img src={activeInsure.image} alt='Avatar' style={{ width: '100%' }} />
        <CardInfo>
          <h4>
            <b>{activeInsure.name}</b>
          </h4>
          <Paragraph description={activeInsure.description} />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <p style={{ color: 'tomato' }}>Precio:</p>
            <p style={{ color: 'tomato', marginLeft: '5px' }}>
              {activeInsure.price}
            </p>
          </div>
        </CardInfo>
      </Card>
    </Container>
  );
};
