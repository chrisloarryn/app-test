import React, { useContext } from 'react';
// import faker from 'faker';
// import { AppStateContext } from '../../../Providers/AppState';
import { Select as SelectComponent, Div, Label } from './styles';
import { Col } from './../../UI/Molecules/Col';
import { Options } from '../Option';


interface IOptionProperties {
  value?: string;
  name?: string;
  image?: string;
  price?: number;
}
interface ISelectProps {
  id?: string;
  iterators?: IOptionProperties[];
  handleChange?: (value: any) => void;
}

export const Select = ({ id, iterators = [], handleChange }: ISelectProps) => {
  {
    /* <div>
      <Label htmlFor={id}>Selector de Plan:</Label>
      <Div style={{ margin: 'auto' }}>
        
        <Button onClick={() => setActive(mock)}>
          Reset
        </Button>
      </Div>
    </div> */
  }
  return (
    <Col>
      <Label htmlFor={id}>Selector de Plan:</Label>
      <SelectComponent id={id} onChange={handleChange}>
        {iterators.map((item: IOptionProperties, index: number) => (
          <Options key={`${index+1}`} option={item} />
        ))}
      </SelectComponent>
    </Col>
  );
};

// const mock = {
//   name: '',
//   description: '',
//   image: '',
//   price: 0
// };
// const { insurances, setActive, active: currentActive } = useContext(
//   AppStateContext
// );
// const handleChange = (e: any) => {
//   setActive(mock);
//   const {
//     target: { value }
//   } = e;
//   const [find] = insurances.filter((item: any) => item.name === value);
//   setActive(find);
// };
