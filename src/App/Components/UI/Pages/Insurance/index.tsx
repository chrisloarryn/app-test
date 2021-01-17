// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Select } from './../../../FormElements/Select';
import { Title, Button } from '../../Atoms';
import { File } from '../../Organisms';
import { useContext, useEffect } from 'react';
import { Container } from '../../Templates';
import { AppStateContext } from '../../../../Providers/AppState';
import { useForm } from '../../../../Hooks/useForm';

export const Insurance = ({ name = '' }: { name?: string }) => {
  const INSURANCE_NAME = 'insurance';
  const { insurances, setActive } = useContext(AppStateContext);
  const [formValues, handleInputChange] = useForm({ [INSURANCE_NAME]: '' });
  console.log(insurances);
  const handleClick = (e: any) => {
    e.preventDefault();
    // setActive(mock);
    const {
      target: { value }
    } = e;
    console.log(value);

    // setActive(find);
  };

  useEffect(() => {
    const filtered =
      insurances &&
      insurances.length &&
      insurances.length > 0 &&
      insurances.filter(
        (item: any) => item.name === formValues[INSURANCE_NAME]
      );
    const find = filtered && filtered.length && filtered[0];
    console.log(find)
    setActive(!!find && find);
    // eslint-disable-next-line
  }, [formValues, setActive]);
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
        <Container align='center'>
          <form
            onSubmit={handleClick}
            css={css`
              display: flex;
              justify-content: center;
              align-items: flex-end;
            `}
          >
            <Select
              iterators={insurances}
              handleChange={handleInputChange}
              name={INSURANCE_NAME}
            />

            <Button name="Elegir" />
          </form>
        </Container>
      </File>
    </div>
  );
};
