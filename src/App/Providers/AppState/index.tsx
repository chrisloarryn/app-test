/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { createContext, useEffect, useState } from 'react';
import { apiGet } from '../../Api';
import { urlBase } from '../../Api/urls';
import { insurances as insuranceMock } from './../../Constants'

export const AppStateContext = createContext({
  insurances: insuranceMock.map((item: any) => item.insurance),
  active: {
    name: '',
    description: '',
    image: '',
    price: 0
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setActive: (value: any): void => {
    return;
  },
  loading: false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setLoading: (value: boolean): void => {
    return;
  }
});

export const AppStateProvider = ({ children }: any): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState<any>({
    name: '',
    description: '',
    image: '',
    price: 0
  });
  const [insurances, setInsurances] = useState<any>(insuranceMock.map((item: any) => item.insurance));

  /* useEffect(() => {
    const availableIDs = [58, 59];
    availableIDs.map(async (id: number) => {
      const { insurance } = await apiGet(`${urlBase}/${id}`)
      setInsurances((prev: any) => [...prev, { ...insurance }])
      return insurance
    }) // setInsurances(status);
  }, []); */

  return (
    <AppStateContext.Provider
      value={{ insurances, loading, setLoading, active, setActive }}
    >
      {children}
    </AppStateContext.Provider>
  );
};
